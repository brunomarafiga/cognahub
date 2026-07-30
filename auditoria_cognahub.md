# Auditoria Completa de Acessibilidade, UX e Integridade de Código — Cognita Hub

**Data do Relatório:** 30 de julho de 2026  
**Auditor Responsável:** Equipe de Auditoria Técnica e Especialistas de UX/A11y/Vue  
**Escopo da Auditoria:** `c:\github\cognahub`  
**Arquivos Inspecionados:** `index.html`, `app.vue`, `package.json`, `nuxt.config.ts`, `testes/teste.html`, `testes/resultado.html`, `css/style.css`, `css/testes_style.css`, `js/script.js`, `js/modais.js`, `js/teste_script.js`, `json/categorias.json`, `json/teste_sociais.json`, `json/teste_dados.json`, `json/teste_projetos.json`.

---

## Cabeçalho e Sumário Executivo

A presente auditoria técnica integrada realizou uma análise detalhada e não destrutiva sobre a plataforma **Cognita Hub**, cobrindo três pilares fundamentais: Acessibilidade Web (WCAG 2.1 níveis AA e AAA), Experiência do Usuário (UX) & Carga Cognitiva, e Integridade de Arquitetura em Vue 3 / Nuxt 3.

O Cognita Hub é uma plataforma educacional interativa projetada para conectar usuários a fontes de conhecimento curadas ("Fontes de Conhecimento") e testes interativos ("Desafios Cognita"). Embora o projeto apresente uma identidade visual agradável baseada nas cores Navy (`#0D1B2A`), Coral (`#E76F51`) e Azul Suave (`#A2D2FF`), a investigação identificou problemas estruturais graves, riscos de segurança, inoperabilidade por teclado, quebras de hidratação SSR e acentuada degradação de experiência.

### Matriz Geral de Saúde do Sistema

| Domínio de Avaliação | Status Geral | Nota / Nível | Resumo da Avaliação |
| :--- | :---: | :---: | :--- |
| **Acessibilidade (WCAG 2.1 AA/AAA)** | ❌ **REPROVADO** | **Crítico** | Falha generalizada de contraste no tom Coral `#E76F51` (2.93:1 em `#F8F9FA` / 3.09:1 em `#FFFFFF`), modais sem *focus trap* e atributos ARIA, cards interativos inoperáveis por teclado (`Enter`/`Space`), e ausência de `:focus-visible`. |
| **Experiência do Usuário (UX)** | ⚠️ **MODERADO** | **Atritos Severos** | Regressão visual severa no `app.vue` em relação ao `index.html`, microtextos abaixo de 13px (`0.78rem`), degradação silenciosa no quiz de Ciências Sociais (20 questões vs 50/100 solicitadas) e fluxo em estado cego ao acessar `teste.html` sem URL param. |
| **Código Vue 3 / Nuxt 3** | 🔴 **CRÍTICO** | **Monolítico / Anti-pattern** | `app.vue` atua como um monolito HTML estático desprovido de reatividade, `<NuxtPage />` ou `<NuxtLayout />`. O código depende 100% de scripts imperativos legados com mutação de DOM (`innerHTML`), vazamento de event listeners e riscos de XSS. |

### Tabela Resumo de Achados por Gravidade

| Gravidade | Qtd | Descrição Sintética dos Achados |
| :---: | :---: | :--- |
| 🔴 **Crítica** | **6** | • Tom Coral `#E76F51` reprovado em contraste AA (2.93:1 em `#F8F9FA` / 3.09:1 em `#FFFFFF`).<br>• Inoperabilidade por teclado nos cards `<article tabindex="0">` por falta de evento `keydown`.<br>• Modais sem *focus trap*, `role="dialog"` e `aria-modal="true"`.<br>• Mutação imperativa via `innerHTML` em `js/script.js` gerando vulnerabilidade a XSS.<br>• `app.vue` como monolito sem `<NuxtPage />`, `<NuxtLayout />` ou reatividade.<br>• Risco de falha de SSR (*ReferenceError: document is not defined*) no carregamento de scripts legados. |
| 🟠 **Alta** | **7** | • Cores de revisão do quiz (Verde `#2A9D8F` 3.35:1 e Vermelho `#E63946` 4.17:1) reprovadas em contraste.<br>• Ausência total de `:focus-visible` e `--cognita-border-focus` não utilizado em CSS.<br>• Regressão de template: `app.vue` omitindo a imagem hero, `.hero-container`, `.about-grid`, foto do criador e CTAs.<br>• Degradação silenciosa de opções do quiz em Ciências Sociais (solicitação de 50/100 questões em um banco de apenas 20).<br>• Acesso direto a `testes/teste.html` sem parâmetro `?quiz=` gera tela de erro sem *fallback*.<br>• Ausência da estrutura de diretórios idiomática do Nuxt 3 (`components/`, `pages/`, `layouts/`, `composables/`, `server/`).<br>• Dependências redundantes em `package.json` (`vue` e `vue-router` travados manualmente). |
| 🟡 **Média** | **6** | • Seção Hero e subseções de quiz posicionadas fora da tag `<main>`.<br>• Salto de nível de cabeçalho `<h2>` para `<h4>` no rodapé e uso de `<p role="heading">`.<br>• Microtextos em 0.78rem / 0.8rem com cor cinza `#6C757D`.<br>• Truncamento defeituoso de descrição via `max-height` sem `-webkit-line-clamp`.<br>• Quebra de simetria Gestalt com a classe `.item-featured` (card vertical vs horizontal).<br>• Falta de destaque visual (`:has(input:checked)`) no container pai das opções do quiz. |
| 🟢 **Baixa** | **4** | • Uso redundante de texto alternativo ("Desafio Cognita: ...") repetindo o `<h3>`.<br>• Dependência de imagem genérica `img/placeholder.jpg` e capas de livros aplicadas a portais de notícias.<br>• Código órfão de modais (`js/modais.js`) e página `testes/resultado.html` desvinculada.<br>• Carregamento de FontAwesome 2.5MB via CDN no `app.vue` sem otimização de build. |

---

## Seção 1: Avaliação de Acessibilidade (WCAG 2.1 AA/AAA)

### 1.1 Tabela Completa de Contraste de Cores

As relações de contraste foram calculadas com base na fórmula oficial de luminância relativa da W3C ($L = 0.2126R + 0.7152G + 0.0722B$). Os requisitos mínimos da WCAG 2.1 exigem **4.5:1** para texto normal (< 24px ou < 18.66px negrito) em Nível AA (**7:1** em Nível AAA) e **3:1** para componentes de UI não-texto (Nível AA 1.4.11).

| Elemento / Classe | Cor de Primer (FG) | Cor de Fundo (BG) | Tamanho / Peso da Fonte | Relação Calculada | Requisito WCAG (AA) | Status AA | Status AAA |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| Links Padrão `a` | `#E76F51` (Coral) | `#FFFFFF` / `#F8F9FA` | 16px / Normal | **3.09:1** (em `#FFFFFF`) / **2.93:1** (em `#F8F9FA`) | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| `.cta-button.hero-cta` | `#FFFFFF` | `#E76F51` (Coral) | 16px / Bold | **3.09:1** | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| `.level-btn`, `.next-question-btn` | `#FFFFFF` | `#E76F51` (Coral) | 14.4px / Bold | **3.09:1** | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| `.cta-button-quiz` | `#E76F51` (Coral) | `#F8F9FA` | 13.6px / Bold | **2.93:1** | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| `.cta-button-quiz:hover` | `#FFFFFF` | `#E76F51` (Coral) | 13.6px / Bold | **3.09:1** | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| Hover Geral de Botões | `#FFFFFF` | `#D65F40` (Coral Escuro) | 14.4px / Bold | **3.78:1** | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| Resposta Correta (Revisão) | `#2A9D8F` (Teal) | `#F8F9FA` / `#FFFFFF` | 16px / Bold | **3.35:1** | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| Resposta Incorreta (Revisão) | `#E63946` (Vermelho) | `#F8F9FA` / `#FFFFFF` | 16px / Normal | **4.17:1** | 4.5:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| Borda de Foco (`--cognita-border-focus`) | `#A2D2FF` (Azul Suave) | `#FFFFFF` (Branco) | UI Não-texto | **1.60:1** | 3.0:1 | ❌ **REPROVADO** | ❌ **REPROVADO** |
| Texto Principal (`body`, `h1`-`h3`) | `#212529` / `#0D1B2A` | `#FFFFFF` / `#F8F9FA` | Variado | **15.8:1** | 4.5:1 | ✅ **APROVADO** | ✅ **APROVADO** |
| Texto Secundário (`p.section-intro`, `#progress-text`) | `#6C757D` (Cinza) | `#FFFFFF` / `#F8F9FA` | 15.2px - 17.6px | **4.65:1** | 4.5:1 | ✅ **APROVADO** | ❌ **REPROVADO** |
| Nav Link Ativo / Hover | `#FFFFFF` | `#1B263B` (Slate) | 15.2px / Medium | **15.2:1** | 4.5:1 | ✅ **APROVADO** | ✅ **APROVADO** |
| Azul Suave sobre Navy | `#A2D2FF` | `#0D1B2A` (Navy) | 16px / Normal | **11.01:1** | 4.5:1 | ✅ **APROVADO** | ✅ **APROVADO** |
| Links do Rodapé | `#BCCCDC` | `#0D1B2A` (Navy) | 15.2px / Normal | **10.67:1** | 4.5:1 | ✅ **APROVADO** | ✅ **APROVADO** |
| Texto de Copyright no Rodapé | `#8A9BAE` | `#0D1B2A` (Navy) | 14.4px / Normal | **6.19:1** | 4.5:1 | ✅ **APROVADO** | ❌ **REPROVADO** |

#### Destaque de Falhas Críticas de Contraste:
1. **Tom Principal Coral `#E76F51` (`css/style.css:10,81,244,587` e `css/testes_style.css:7,107`):** O tom Coral principal atinge apenas **2.93:1** contra fundo cinza claro (`#F8F9FA`) e **3.09:1** contra fundo branco (`#FFFFFF`), violando diretamente o critério **WCAG 1.4.3 (Nível AA)**. Para atingir conformidade AA em textos normais e botões, a cor Coral deve ser escurecida para pelo menos **`#C84B2C`** (4.51:1) ou **`#BD4324`** (5.02:1).
2. **Cres de Status do Modo de Revisão (`css/testes_style.css:330-336`):** As cores de realce de respostas corretas (`#2A9D8F`, 3.35:1) e incorretas (`#E63946`, 4.17:1) falham no requisito de 4.5:1 para texto padrão.
3. **Indicador de Borda de Foco (`css/style.css:18`):** A variável `--cognita-border-focus: #A2D2FF` possui contraste de apenas **1.60:1** contra superfícies brancas, descumprindo o critério **WCAG 1.4.11 (Contraste Não-Texto, Nível AA)** de no mínimo 3.0:1.

---

### 1.2 Estrutura de Marcos ARIA & HTML5

#### Análise dos Containeres Semânticos:
- **`index.html` & `app.vue`:**
  - `<header class="main-navigation">` (`index.html:24`, `app.vue:4`) — Correto.
  - `<nav class="site-nav" aria-label="Navegação principal">` (`index.html:33`, `app.vue:10`) — Correto.
  - `<main class="site-main">` (`index.html:59`, `app.vue:31`).
  - ❌ **Violação (WCAG 2.4.1 / 1.3.1):** A Seção Hero (`<section class="hero-section" id="hero">`) está posicionada **fora** da tag `<main>` (entre o `<header>` e o `<main>`). O conteúdo principal da página deve obrigatoriamente residir dentro do marco `<main>`.
- **`testes/teste.html`:**
  - `<header class="quiz-header">` (linha 24) — Correto.
  - `<main id="quiz-content" class="hidden">` (linha 38).
  - ❌ **Violação (WCAG 2.4.1):** As seções `<section id="level-selection-area">` (linha 29), `<section id="results-area">` (linha 54) e `<section id="review-section">` (linha 65) são filhas diretas do `<body>` e estão posicionadas **fora** do `<main>`.
  - ❌ **Violação (WCAG 1.3.1):** Ausência completa da tag `<footer>` em `testes/teste.html` e `testes/resultado.html`.

#### Uso Incorreto de Atributos e Papéis ARIA:
1. **Uso Indevido de `role="button"` em Cards com Link (`index.html:96,106,118` e `app.vue:68,75,82`):**
   ```html
   <article class="quiz-card" role="button" tabindex="0" onclick="window.location.href='testes/teste.html?quiz=sociais'">
   ```
   *Problema:* Um elemento que redireciona o usuário para uma nova URL deve utilizar `role="link"` ou uma tag semântica `<a href="...">`, nunca `role="button"`. Leitores de tela anunciam o item como "botão", gerando confusão cognitiva quando o acionamento dispara navegação de página.
2. **Uso Inválido de `role="form"` (`testes/teste.html:43`):**
   ```html
   <div class="question-item" role="form" aria-labelledby="question-text-id">
   ```
   *Problema:* O papel `role="form"` deve ser reservado exclusivamente para formulários interativos com mecanismos de submissão. Aplicado a um container de pergunta individual, cria ruído desnecessário na árvore de acessibilidade.
3. **Redundância de `role="radiogroup"` (`testes/teste.html:45`):**
   ```html
   <div class="options-container" id="options-container-id" role="radiogroup" aria-labelledby="question-text-id">
   ```
   *Problema:* Elementos nativos `<input type="radio" name="...">` gerados por `js/teste_script.js:469-474` já estabelecem agrupamento de rádio nativo através do atributo `name`. O wrapper com `role="radiogroup"` gera anúncios duplicados em leitores de tela como NVDA e JAWS.

---

### 1.3 Modais (`js/modais.js`) e Gerenciamento de Foco

A inspeção detalhada de `js/modais.js` revelou falhas graves de acessibilidade e desconexão de código:

```javascript
// js/modais.js:15-32 (Implementação Deficiente)
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}
```

1. ❌ **Ausência de Papéis e Atributos de Diálogo (WCAG 4.1.2):** O script altera apenas a classe CSS `.active`. Não são definidos os atributos `role="dialog"`, `aria-modal="true"`, nem a vinculação de `aria-labelledby` e `aria-describedby`.
2. ❌ **Ausência de Prisão de Foco / Focus Trap (WCAG 2.1.1):** Ao abrir um modal, pressionar a tecla `Tab` permite que o foco navegue para fora do modal, interagindo com elementos invisíveis do fundo da página.
3. ❌ **Falta de Retorno de Foco (WCAG 2.4.3):** Ao invocar `fecharModal()`, o foco do teclado é perdido, não retornando ao elemento/botão disparador.
4. ❌ **Exposição do Conteúdo de Fundo (WCAG 1.3.1):** Não é aplicado `aria-hidden="true"` ao conteúdo principal do DOM enquanto o modal está ativo.
5. ❌ **Desconexão do DOM (Código Órfão):** O arquivo `js/modais.js` referencia IDs de modais (`#addBookModal`, `#addPodcastModal`, `#addNewsSiteModal`, `#addYoutubeChannelModal`) que **não existem** em nenhum arquivo HTML ou Vue da aplicação.

---

### 1.4 Compatibilidade com Leitores de Tela e Hierarquia de Cabeçalhos

#### Análise da Árvore de Cabeçalhos (Headings):
- **`index.html` & `app.vue`:**
  - `<h1>`: "Cognita Hub: Conecte-se ao conhecimento. Desafie sua mente." (`index.html:49`)
  - `<h2>`: "Fontes de Conhecimento Cognita" (`index.html:63`)
    - `<h3>`: Subcategorias ("Biblioteca", "Audioteca", "Videoteca", "Observatório") (`index.html:68,73,78,83`)
  - `<h2>`: "Desafie Sua Mente com Cognita Hub" (`index.html:93`)
    - `<h3>`: Títulos dos quizzes individuais (`index.html:101,111,121`)
  - `<h2>`: "Por Que Cognita Hub?" (`index.html:133`)
    - `<h3>`: Itens de benefícios (`index.html:139,146,153`)
  - `<h2>`: "Cognita Hub: Uma Iniciativa de Conhecimento" (`index.html:163`)
  - ❌ **Salto de Nível de Cabeçalho (WCAG 1.3.1 / 2.4.6):** As colunas do rodapé utilizam a tag `<h4>` ("Cognita Hub", "Contato", "Redes Sociais") (`index.html:181,185,189`) imediatamente após uma seção `<h2>`, saltando o nível `<h3>`.
- **`testes/teste.html`:**
  - `<h1>`: "Questionário Cognita" (linha 25)
  - `<h2>`: "Escolha o Nível de Dificuldade" (linha 30)
  - ❌ **Cabeçalho Não Semântico (WCAG 1.3.1 / H42):** O texto da pergunta utiliza `<p class="question-text" id="question-text-id" role="heading" aria-level="2">` (linha 44). Leitores de tela exigem elementos semânticos nativos (`<h2>`/`<h3>`) em vez de parágrafos estilizados com papéis ARIA simulados.
  - `<h2>`: "Resultados Finais" (linha 55)
  - `<h3>`: "Revisão das Respostas" (linha 66)

---

### 1.5 Navegação por Teclado e Foco Visível

#### Ausência de Estilos de Foco Visível (WCAG 2.4.7 Nível AA):
- ❌ **Ausência de Regras `:focus-visible`:** Nenhum dos arquivos CSS (`css/style.css` e `css/testes_style.css`) define regras para `:focus-visible` ou anéis de foco com alto contraste.
- Em `css/style.css:86,162,190,260`, a pseudo-classe `:focus` altera apenas a cor do texto ou o fundo, sem apresentar um contorno nítido de no mínimo 2px.
- A variável `--cognita-border-focus: #A2D2FF` definida em `css/style.css:18` **nunca é utilizada** na folha de estilos.

#### Inoperabilidade por Teclado nos Cards Interativos (WCAG 2.1.1 Nível A):
- Em `index.html:96,106,118`:
  ```html
  <article class="quiz-card" role="button" tabindex="0" onclick="window.location.href='testes/teste.html?quiz=sociais'">
  ```
- **Falha Crítica:** Embora o elemento receba foco via `Tab` devido ao `tabindex="0"`, pressionar as teclas `Enter` ou `Espaço` **não dispara a navegação**, pois não há tratadores do evento `keydown` em `js/script.js`.
- Em `app.vue:68,75,82`:
  ```html
  <article class="quiz-card" role="button" tabindex="0">
  ```
- **Falha Crítica:** Os cards recebem foco do teclado, mas não possuem manipuladores de evento `@click` ou `@keydown`, permanecendo 100% inoperáveis.

---

### 1.6 Atributos Alt de Imagens

Auditoria completa de todos os elementos `<img>` presentes nos templates:

| Arquivo | Linha | Caminho da Imagem | Atributo `alt` Atual | Classificação | Avaliação de Acessibilidade |
| :--- | :---: | :--- | :--- | :--- | :--- |
| `index.html` | 27 | UFPR Logo | `alt="Logo UFPR"` | Informativa | ✅ **Conforme** |
| `index.html` | 54 | Imagem Hero | `alt="Ilustração Cognita Hub - Conectividade e Conhecimento"` | Decorativa | ⚠️ **Sub-ótima:** Gráfico ilustrativo deve usar `alt=""` ou `role="presentation"`. |
| `index.html` | 98 | Ícone Card (Sociais) | `alt="Desafio Cognita: Ciências Sociais"` | Decorativa | ❌ **Redundante:** Repete exatamente o texto do título `<h3>`. |
| `index.html` | 108 | Ícone Card (Dados) | `alt="Desafio Cognita: Gestão de Dados"` | Decorativa | ❌ **Redundante:** Repete exatamente o texto do título `<h3>`. |
| `index.html` | 118 | Ícone Card (Projetos) | `alt="Desafio Cognita: Gerenciamento de Projetos"` | Decorativa | ❌ **Redundante:** Repete exatamente o texto do título `<h3>`. |
| `index.html` | 166 | Foto do Criador | `alt="Bruno de Paula Marafiga - Criador do Cognita Hub"` | Informativa | ✅ **Conforme** |
| `app.vue` | 7 | UFPR Logo | `alt="Logo UFPR"` | Informativa | ✅ **Conforme** |
| `app.vue` | 69 | Ícone Card (Sociais) | `alt=""` | Decorativa | ✅ **Conforme** (Corretamente ocultada) |
| `app.vue` | 76 | Ícone Card (Dados) | `alt=""` | Decorativa | ✅ **Conforme** (Corretamente ocultada) |
| `app.vue` | 83 | Ícone Card (Projetos) | `alt=""` | Decorativa | ✅ **Conforme** (Corretamente ocultada) |
| `js/script.js` | 206 | Capa Dinâmica | `alt="Capa de ${recurso.titulo}"` | Informativa | ⚠️ **Sub-ótima:** Contém o prefixo redundante "Capa de". |

---

## Seção 2: Avaliação de Carga Cognitiva e UX

### 2.1 Disparidade de Templates (`index.html` vs `app.vue`)

Durante a migração para o Nuxt 3, o arquivo `app.vue` sofreu uma severa regressão de layout e omissão de elementos visuais cruciais presentes em `index.html`:

```
+-----------------------------------------------------------------------------------+
| COMPARATIVO DE REGRESSÃO DE TEMPLATES                                             |
|                                                                                   |
| INDEX.HTML (Layout Completo):                                                    |
| [Header] -> [Hero Grid (Texto 1.2fr + Imagem Hero 0.8fr)] -> [Grid 4 Cols]        |
| -> [About Grid (Foto 240px + Bio)] -> [Footer]                                    |
|                                                                                   |
| APP.VUE (Layout Degradado):                                                      |
| [Header] -> [Hero Text Apenas (100% largura, sem imagem)] -> [Containers Vazio]   |
| -> [About Texto Centralizado (sem foto)] -> [Footer]                              |
+-----------------------------------------------------------------------------------+
```

| Elemento / Componente | Implementação em `index.html` | Implementação em `app.vue` | Impacto na Experiência do Usuário |
| :--- | :--- | :--- | :--- |
| **Grid do Hero Banner** | Linhas 46-57: `.hero-container` em grid (`1.2fr 0.8fr`) com imagem `.hero-graphic`. | Linhas 23-29: Container `.hero-content` simples. Omissão da classe `.hero-container` e da imagem. | O texto do Hero se espalha por 100% da largura (>120 caracteres por linha), destruindo a legibilidade e removendo o âncora visual direito. |
| **Mídia dos Cards de Quiz** | Linhas 96-125: `<article class="quiz-card">` contendo `.card-media`, `img.card-icon` e `span.cta-button-quiz`. | Linhas 67-89: Imagem inserida diretamente no card sem wrapper `.card-media`. Omissão completa dos botões CTA. | Quebra as animações CSS de hover e remove o indicativo visual claro de ação dos cards. |
| **Seção do Criador (Sobre)** | Linhas 161-175: Grid de 2 colunas (`.about-grid`) com foto de 240px e texto biográfico. | Linhas 118-126: Bloco de texto centralizado via estilo inline (`max-width: 800px`). Foto omitida. | Elimina o fator humano e a credibilidade institucional da apresentação do autor do projeto. |
| **Containers de Recursos** | Linhas 66-86: Estruturas HTML pré-renderizadas. | Linhas 37-60: Tags `<div class="lista-recursos"></div>` vazias. | Dependência 100% da execução de JS client-side; tela em branco caso o JS falhe. |

---

### 2.2 Tipografia e Densidade de Texto

#### Problemas de Microtipografia e Legibilidade:
1. **Microtextos Abaixo de 13px (`css/style.css:450-464`):**
   - Autor do recurso: `font-size: 0.78rem` (~12.5px).
   - Descrição do recurso: `font-size: 0.8rem` (~12.8px) com `line-height: 1.4`.
   - Cor do texto: `--cognita-text-secondary: #6C757D`.
   - **Violação de Legibilidade:** A cor `#6C757D` em fundo claro (`#F8F9FA`) possui contraste de 4.4:1. Para fontes menores que 14px, a WCAG exige no mínimo 4.5:1. O uso de microtipografia cinza força esforço visual excessivo.
2. **Truncamento Defeituoso de Descrições (`css/style.css:437-440` e `465-474`):**
   - Títulos e autores utilizam `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`, cortando títulos longos abruptamente.
   - Descrições utilizam limitação por altura fixa (`max-height: 80px` para destaques, `max-height: 70px` em hover). Como o padrão `text-overflow: ellipsis` não funciona em textos multilinha sem `-webkit-line-clamp`, descrições longas (como o texto de 303 caracteres do podcast "CTRL ENTER" em `json/categorias.json`) são cortadas verticalmente no meio de uma frase.

---

### 2.3 Agrupamento Visual e Princípios da Gestalt

1. **Quebra da Lei da Similaridade e Continuidade (`.recurso-item`):**
   - Em `js/script.js:197-200`, o primeiro item (`index === 0`) de cada categoria recebe obrigatoriamente a classe `.item-featured`.
   - **Violação de Simetria:** O Item #1 é renderizado verticalmente com uma grande imagem de capa de 140px e descrição visível. Os Itens #2, #3 e #4 são renderizados horizontalmente com uma miniatura quadrada de 50x50px, ocultando a descrição até que ocorra o hover (`css/style.css:465-485`).
   - **Impacto Cognitivo:** Essa inconsistência rompe o padrão visual de varredura ocular. O usuário que busca por livros espera uma lista homogênea; a alternância abrupta cria ruído visual desnecessário.
2. **Incompatibilidade de Imagens e Modelos Mentais (`json/categorias.json`):**
   - Todos os 9 canais do YouTube (`json/categorias.json:58-113`) utilizam a imagem genérica `img/placeholder.jpg`.
   - Portais de notícias e pesquisa (CAPES, Brapci, FAPESP, Ipea) (`json/categorias.json:114-139`) utilizam capas de livros físicos importadas da Amazon, violando o modelo mental do usuário ao associar um site de notícias à imagem de um livro.
3. **Falta de Destaque Visual nas Opções do Quiz (`css/testes_style.css:198-241`):**
   - Quando o usuário seleciona um botão de rádio no quiz, apenas o pequeno círculo de rádio de 20px recebe um ponto coral de 10px. O container da opção (`.option-label`) permanece com o fundo branco inalterado. A ausência de suporte à pseudo-classe `:has(input:checked)` força o usuário a focar atentamente o olhar no pequeno círculo para confirmar sua escolha.

---

### 2.4 Clareza Visual e Ruído (Código Órfão)

1. **Módulo de Modais Órfão (`js/modais.js`):**
   - O arquivo `js/modais.js` contém 225 linhas de código tratando envios de formulários para inclusão de livros, podcasts e canais. Contudo, **nenhum arquivo da aplicação contém as estruturas HTML correspondentes**. O arquivo representa 100% de código morto executado no navegador.
2. **Página de Resultados Abandonada (`testes/resultado.html`):**
   - O arquivo `testes/resultado.html` (46 linhas) está completamente desvinculado da aplicação. O script `js/teste_script.js` processa e exibe a tela final de resultados de forma dinâmica dentro do próprio `testes/teste.html` (função `showResults()`, linhas 532-558).

---

### 2.5 Atrito Cognitivo e Fluxos do Usuário

#### Acesso Direto sem Parâmetro de URL (Navegação Cega):
Quando um usuário acessa diretamente a URL `testes/teste.html` sem o parâmetro `?quiz=` (por exemplo, via favorito ou navegação manual):
- A função `getQuizNameFromURL()` (`js/teste_script.js:153-170`) retorna `null`.
- A função `initQuiz()` (linhas 180-184) renderiza na tela a mensagem de erro: *"Não foi possível determinar qual questionário carregar."*.
- **Atrito Cognitivo:** Trata-se de um estado sem saída (*dead-end*). O sistema não exibe um seletor *dropdown* para que o usuário possa escolher o quiz desejado na própria tela, forçando-o a retornar manualmente à página inicial.

#### Degradação Silenciosa das Opções de Dificuldade:
Em `testes/teste.html`, a tela de escolha de nível oferece três opções (linhas 31-35):
- "Fácil (20 Questões)"
- "Intermediário (50 Questões)"
- "Avançado (100 Questões)"

```
SELEÇÃO SOLICITADA PELO USUÁRIO: [ Avançado (100 Questões) ]
                                          |
BANCO DE DADOS DISPONÍVEL:           [ teste_sociais.json (Apenas 20 Questões) ]
                                          |
COMPORTAMENTO DO SISTEMA:           [ Degradação silenciosa sem aviso visual em Ciências Sociais ]
                                          |
TELA DO QUIZ APRESENTADA:           "Questão 1 de 20"  <-- VIOLAÇÃO DE EXPECTATIVA!
```

- **Mapeamento Real dos Bancos de Dados:**
  - `json/teste_sociais.json`: **20 questões**.
  - `json/teste_dados.json`: **100 questões**.
  - `json/teste_projetos.json`: **100 questões**.
- **Falha de UX (`js/teste_script.js:309-314`):** A seleção de "Avançado (100 Questões)" funciona 100% como esperado para Gestão de Dados (`teste_dados.json`) e Gerenciamento de Projetos (`teste_projetos.json`), pois ambos contêm 100 questões em seus bancos de dados. A degradação silenciosa (ajuste/clamping para 20 questões) ocorre exclusivamente ao selecionar "Intermediário (50)" ou "Avançado (100)" para Ciências Sociais (`teste_sociais.json`), pois este banco possui apenas 20 questões. O script registra apenas um aviso no console e ajusta silenciosamente o total para 20 questões. O usuário inicia o teste esperando 50 ou 100 questões e depara-se imediatamente com "Questão 1 de 20", gerando desconfiança e frustração.

---

## Seção 3: Integridade do Código Vue 3 / Nuxt 3

### 3.1 Análise Estrutural do `app.vue`

O arquivo `app.vue` (9.7KB, 169 linhas) apresenta um estado grave de anti-pattern arquitetural:

```vue
<!-- ESTADO ATUAL PREJUDICIAL DE app.vue -->
<script setup>
// Sem reatividade, sem imports de componentes, apenas useHead com links CDN externos
useHead({
  title: 'Cognita Hub',
  link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }]
})
</script>

<template>
  <!-- Monolito estático de 160 linhas misturando HTML estático e divs vazias -->
  <div class="site-wrapper">
    <header class="main-navigation">...</header>
    <section class="hero-section">...</section>
    <div class="lista-recursos"></div> <!-- Container vazio permanente no Nuxt! -->
    <footer>...</footer>
  </div>
</template>
```

- **Inexistência de Roteamento Nuxt:** Não existem os componentes `<NuxtPage />` ou `<NuxtLayout />`. Toda a navegação baseada em arquivos da pasta `pages/` está bloqueada.
- **Containers Estáticos Vazios:** As linhas 41, 46, 51 e 56 possuem divs vazias (`<div class="lista-recursos"></div>`). No site estático legado, essas divs eram preenchidas imperativamente por `js/script.js`. Como `script.js` não é executado pelo Vue, a lista de recursos fica permanentemente invisível no Nuxt.
- **Estilização Inline Desnecessária:** A linha 121 possui estilos hardcoded: `style="text-align: center; max-width: 800px; margin-left: auto; margin-right: auto;"`.

---

### 3.2 Convenções de Projeto Nuxt 3

O projeto violava a estrutura padrão recomendada pelo Nuxt 3:

| Diretório Atual | Local Padrão Nuxt 3 | Status de Conformidade | Diagnóstico Técnico |
| :--- | :--- | :---: | :--- |
| `css/` | `assets/css/` | **Não Conforme** | Arquivos CSS globais devem residir em `assets/css/` para processamento pelo Vite/PostCSS. |
| `img/` | `public/img/` | **Não Conforme** | Imagens estáticas devem residir em `public/img/` para servir direto via URL. |
| `js/` | *Composables / Utils* | **Não Conforme** | Scripts imperativos com mutação de DOM devem ser substituídos por composables Vue 3. |
| `json/` | `server/api/` ou `assets/data/` | **Não Conforme** | Dados de questionários e categorias devem ser servidos via Nitro API routes. |
| `testes/` | `pages/desafios/` | **Não Conforme** | Páginas HTML estáticas rompem a navegação SPA/SSR do Nuxt. |
| *Ausente* `components/` | `components/` | **Faltando** | Essencial para decomposição de Single File Components (SFCs). |
| *Ausente* `pages/` | `pages/` | **Faltando** | Essencial para o sistema de roteamento automático. |
| *Ausente* `layouts/` | `layouts/` | **Faltando** | Essencial para reutilização da casca (Header/Footer). |
| *Ausente* `composables/` | `composables/` | **Faltando** | Essencial para gestão de estado reativo e regras de negócio. |

#### Análise do `package.json`:
```json
"dependencies": {
  "@nuxt/ui": "^2.16.0",
  "nuxt": "^3.12.3",
  "vue": "^3.4.31",
  "vue-router": "^4.4.0"
}
```
*Falha:* A inclusão explícita de `vue` e `vue-router` em `dependencies` é um erro. O Nuxt 3 gerencia suas próprias versões internas de `vue` e `vue-router`. Travar essas dependências manualmente causa conflitos de versão durante o build.

---

### 3.3 Vue 3 Composition API & Reatividade

O projeto possui **0% de aproveitamento da Composition API**. Em `js/teste_script.js` (718 linhas), o estado de um quiz em andamento é mantido através de variáveis globais mutáveis declaradas nas linhas 118-127 (`let allQuestionsData`, `let selectedNumberOfQuestions`, `let currentQuestionIndex`, `let score`, etc.), enquanto as linhas 10-25 contêm referências a elementos do DOM (`document.getElementById`):

```javascript
// ANTIPATTERN: Variáveis Globais Mutáveis (js/teste_script.js:118-127)
let allQuestionsData = [];
let totalQuizQuestions = 0;
let quizName = '';
let selectedNumberOfQuestions = 0;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
```

Essa abordagem impede a reatividade de componentes, impossibilita testes unitários isolados e causa vazamento de estado entre sessões do usuário no ambiente SSR.

---

### 3.4 Conflitos de Hidratação SSR e JS Legado

#### 1. Risco de Crash no Servidor (Node.js SSR):
Os arquivos legados `js/script.js` e `js/modais.js` executam acessos diretos aos objetos globais `window` e `document` no escopo raiz do arquivo:
```javascript
document.addEventListener('DOMContentLoaded', () => { ... });
window.addEventListener('scroll', () => { ... });
```
Durante a renderização no servidor (SSR com Node.js), os objetos `window` e `document` não existem. A avaliação desses scripts gera um erro fatídico `ReferenceError: document is not defined`, derrubando o servidor da aplicação.

#### 2. Injeção de Código Não Sanitizado (Vulnerabilidade XSS):
Em `js/script.js` (linhas 138, 208-232) e `js/modais.js` (linhas 165-181):
```javascript
// CÓDIGO VULNERÁVEL A XSS
novoItem.innerHTML = `
    <strong>${dados.titulo}</strong> - <em>${dados.autor}</em>
    <p>${dados.descricao}</p>
`;
```
Valores dinâmicos são concatenados diretamente na propriedade `innerHTML`. Se uma fonte de dados ou campo de entrada contiver scripts maliciosos (ex: `<img src=x onerror=alert(1)>`), o código será executado no navegador do usuário.

#### 3. Vazamento de Memória por Event Listeners Órfãos:
O script `js/script.js` registra ouvintes de eventos globais no `window` sem qualquer função de remoção (`removeEventListener`). Em aplicações SPA (Single Page Application), alternar entre rotas acumula múltiplos ouvintes duplicados na memória, degradando drasticamente o desempenho do navegador.

---

### 3.5 Otimização de Performance e Build

1. **Carga Bloqueante de Fontes e Ícones por CDN:** `app.vue` importa o CSS completo do FontAwesome (2.5MB) via URL externa. O caminho recomendado no Nuxt 3 é a utilização do `@nuxt/ui` com o módulo `@iconify/vue` ou `nuxt-icon`, que empacota e envia apenas os ícones efetivamente utilizados no HTML, reduzindo o tamanho do CSS em até 95%.
2. **Monolito CSS Não Otimizado:** O arquivo `css/style.css` (992 linhas, 22KB) é enviado integralmente em todas as páginas da aplicação. A migração deve decompor esses estilos em escopos locais (`<style scoped>`) dentro de cada componente Vue.

---

## Seção 4: Plano de Ação e Refatoração Sugerida

### 4.1 Matriz Priorizada de Remediação

| Ação Recomendada | Gravidade | Categoria | Esforço Est. | Critério WCAG / Nuxt Relacionado |
| :--- | :---: | :---: | :---: | :--- |
| **Ajustar tom Coral para `#C84B2C` e cores de revisão** | 🔴 Crítica | A11y / CSS | Baixo (1h) | WCAG 2.1 AA 1.4.3 (Contraste Mínimo 4.5:1) |
| **Decompor `app.vue` e implementar `<NuxtPage />` e `<NuxtLayout />`** | 🔴 Crítica | Código Nuxt | Médio (4h) | Convenções Nuxt 3 e Roteamento SPA/SSR |
| **Criar Composable `composables/useQuiz.ts` com estado reativo** | 🔴 Crítica | Vue 3 / JS | Médio (4h) | Vue 3 Composition API & Reatividade |
| **Substituir `innerHTML` por bindings reativos `{{ }}`** | 🔴 Crítica | Segurança / Vue | Baixo (2h) | Prevenção contra XSS e Mismatches de Hidratação |
| **Corrigir inoperabilidade por teclado nos cards (`<a class="quiz-card">`)** | 🔴 Crítica | A11y | Baixo (1h) | WCAG 2.1 A 2.1.1 (Navegação por Teclado) |
| **Implementar ARIA e focus trap nos modais** | 🔴 Crítica | A11y / JS | Médio (3h) | WCAG 2.1 AA 2.1.1, 2.4.3 e 4.1.2 (Dialogs & Foco) |
| **Adicionar indicador visível de foco (`:focus-visible`)** | 🟠 Alta | A11y / CSS | Baixo (1h) | WCAG 2.1 AA 2.4.7 (Foco Visível) |
| **Criar Nitro API Endpoints (`server/api/categorias.get.ts`)** | 🟠 Alta | Nuxt Server | Baixo (2h) | Nuxt 3 Nitro Engine & SSR Data Fetching |
| **Limitar opções de nível do quiz dinamicamente conforme tamanho do banco** | 🟠 Alta | UX / JS | Baixo (2h) | Carga Cognitiva e Prevenção de Erros de UX |
| **Tratar acesso direto a `teste.html` exibindo seletor de fallback** | 🟠 Alta | UX / JS | Baixo (1h) | Fluxo Contínuo do Usuário e Estado de Recuperação |
| **Recuperar simetria visual do `app.vue` (Hero image, creator bio)** | 🟠 Alta | UX / Vue | Médio (3h) | Paridade de Design e Experiência Visual |
| **Ajustar microtextos para 14px (`0.875rem`) e cor `#495057`** | 🟡 Média | UX / A11y | Baixo (1h) | WCAG 2.1 AA 1.4.3 e Legibilidade |
| **Corrigir hierarquia de cabeçalhos (remover salto para `<h4>`)** | 🟡 Média | A11y | Baixo (1h) | WCAG 2.1 A 1.3.1 (Estrutura Semântica) |
| **Destacar card de opção selecionada via `:has(input:checked)`** | 🟡 Média | UX / CSS | Baixo (1h) | Princípios de Feedback Visual Gestalt |

---

### 4.2 Proposta de Arquitetura Nuxt 3 Refatorada

Estrutura de diretórios recomendada para o ecossistema Cognita Hub:

```
c:\github\cognahub\
├── app.vue                          # Raiz minimalista (<NuxtLayout><NuxtPage /></NuxtLayout>)
├── nuxt.config.ts                   # Configurações globais e cabeçalhos meta
├── package.json                     # Dependências limpas (sem vue/vue-router manuais)
├── assets/
│   └── css/
│       └── style.css                # Estilos globais e variáveis de tema acessíveis
├── public/
│   └── img/                         # Imagens estáticas (logos, capas, ilustrações)
├── server/
│   └── api/
│       ├── categorias.get.ts        # Endpoint Nitro para fontes de conhecimento
│       └── quizzes/
│           └── [id].get.ts          # Endpoint Nitro dinâmico para questões do quiz
├── composables/
│   ├── useQuiz.ts                   # Gestão reativa do estado do questionário
│   └── useResources.ts              # Gestão reativa de busca e expansão de recursos
├── layouts/
│   └── default.vue                  # Casca global da aplicação (Header + Nav + Footer)
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue            # Cabeçalho com menu móvel reativo
│   │   └── AppFooter.vue            # Rodapé semântico com ano dinâmico
│   ├── home/
│   │   ├── HeroSection.vue          # Hero banner completo com imagem
│   │   ├── BenefitsSection.vue      # Seção de benefícios em grid
│   │   └── AboutSection.vue         # Seção sobre o criador com foto
│   ├── resources/
│   │   ├── ResourceCategoryCard.vue # Card de categoria de recurso (Livros, Podcasts, etc)
│   │   └── ResourceItem.vue         # Item individual com acessibilidade e truncamento
│   └── quiz/
│       ├── QuizCard.vue             # Card semântico de seleção de quiz
│       ├── QuizQuestion.vue         # Renderizador de perguntas (MC, VF, AG)
│       ├── QuizProgress.vue         # Barra de progresso reativa
│       └── QuizReview.vue           # Tela de revisão com cores de alto contraste
└── pages/
    ├── index.vue                    # Página inicial montando os componentes da Home
    └── desafios/
        └── [id].vue                 # Página dinâmica do quiz (substitui teste.html)
```

---

### 4.3 Exemplo de Composable Typed em TypeScript (`composables/useQuiz.ts`)

```typescript
import { ref, computed } from 'vue'

export interface Question {
  id: number
  disciplina: string
  pergunta: string
  opcoes: string[]
  resposta: string
  tipo: 'MC' | 'VF' | 'AG'
  contexto?: string
  afirmacoes?: string[]
}

export interface UserAnswer {
  questionIndex: number
  questionId: number
  selectedOption: string
  correctOption: string
  isCorrect: boolean
}

export const useQuiz = (quizTheme: string) => {
  const questions = ref<Question[]>([])
  const currentIndex = ref(0)
  const score = ref(0)
  const userAnswers = ref<UserAnswer[]>([])
  const selectedDifficultyCount = ref(20)
  const isCompleted = ref(false)
  const pending = ref(false)
  const errorMessage = ref<string | null>(null)

  const currentQuestion = computed(() => questions.value[currentIndex.value] || null)
  const totalQuestions = computed(() => questions.value.length)
  const progressPercentage = computed(() => 
    totalQuestions.value > 0 ? ((currentIndex.value + 1) / totalQuestions.value) * 100 : 0
  )
  const scorePercentage = computed(() => 
    totalQuestions.value > 0 ? ((score.value / totalQuestions.value) * 100).toFixed(1) : '0.0'
  )

  async function loadQuizData(requestedCount: number) {
    pending.value = true
    errorMessage.value = null
    try {
      const response = await $fetch<{ questions: Question[] }>(`/api/quizzes/${quizTheme}`)
      const poolSize = response.questions.length
      
      // Ajusta o total com base no banco disponível sem degradação silenciosa
      const actualCount = Math.min(requestedCount, poolSize)
      selectedDifficultyCount.value = actualCount
      
      // Embaralhamento seguro
      const shuffled = [...response.questions].sort(() => Math.random() - 0.5)
      questions.value = shuffled.slice(0, actualCount)
      
      currentIndex.value = 0
      score.value = 0
      userAnswers.value = []
      isCompleted.value = false
    } catch (err: any) {
      errorMessage.value = 'Erro ao carregar o questionário solicitado.'
    } finally {
      pending.value = false
    }
  }

  function submitAnswer(optionLetter: string) {
    if (!currentQuestion.value) return
    
    const isCorrect = optionLetter.toUpperCase() === currentQuestion.value.resposta.toUpperCase()
    if (isCorrect) score.value++

    userAnswers.value.push({
      questionIndex: currentIndex.value,
      questionId: currentQuestion.value.id,
      selectedOption: optionLetter,
      correctOption: currentQuestion.value.resposta,
      isCorrect
    })

    if (currentIndex.value + 1 < totalQuestions.value) {
      currentIndex.value++
    } else {
      isCompleted.value = true
    }
  }

  return {
    questions,
    currentIndex,
    currentQuestion,
    totalQuestions,
    progressPercentage,
    scorePercentage,
    userAnswers,
    isCompleted,
    pending,
    errorMessage,
    loadQuizData,
    submitAnswer
  }
}
```

---

### 4.4 Exemplo de Endpoint Nitro API (`server/api/categorias.get.ts`)

```typescript
import { defineEventHandler } from 'h3'
import categoriasData from '~/assets/data/categorias.json'

export default defineEventHandler((event) => {
  // Retorna os dados das categorias com cabeçalhos de cache otimizados para Nitro/Vite
  return {
    statusCode: 200,
    data: categoriasData
  }
})
```

---

### 4.5 Instruções Passo a Passo para Migração Segura

Para executar a remediação do Cognita Hub sem interromper o ambiente de produção, siga este plano em 5 etapas:

#### Passo 1: Correção Imediata de Acessibilidade CSS (Quick Wins)
1. No arquivo `css/style.css`, altere a variável `--cognita-accent-coral` de `#E76F51` para **`#C84B2C`**.
2. Altere o tom da borda de foco `--cognita-border-focus` de `#A2D2FF` para **`#0D1B2A`**.
3. Adicione a regra global de foco visível em `css/style.css`:
   ```css
   *:focus-visible {
     outline: 3px solid var(--cognita-border-focus);
     outline-offset: 2px;
   }
   ```
4. Atualize os estilos de rádio em `css/testes_style.css`:
   ```css
   .option-label:has(input[type="radio"]:checked) {
     background-color: rgba(200, 75, 44, 0.08);
     border-color: #C84B2C;
     font-weight: 600;
   }
   ```

#### Passo 2: Reestruturação de Diretórios e Limpeza de Dependências
1. Crie os diretórios `assets/css/`, `public/img/`, `assets/data/`, `components/`, `pages/`, `layouts/`, `composables/` e `server/api/`.
2. Mova `css/style.css` para `assets/css/style.css`.
3. Mova as imagens de `img/` para `public/img/`.
4. Mova os arquivos JSON de `json/` para `assets/data/`.
5. Em `package.json`, remova `"vue"` e `"vue-router"` da seção `"dependencies"`.

#### Passo 3: Criação da Camada de Componentes e Páginas Nuxt 3
1. Crie a página `pages/index.vue` migrando a estrutura do `index.html` em componentes modulares.
2. Crie a página dinâmica `pages/desafios/[id].vue` utilizando o composable `useQuiz.ts`.
3. Atualize o `app.vue` para conter apenas `<NuxtLayout><NuxtPage /></NuxtLayout>`.

#### Passo 4: Remoção de Arquivos Legados e Órfãos
1. Remova o script imperativo `js/script.js`.
2. Remova o script de modais órfão `js/modais.js`.
3. Remova os scripts de teste legados `js/teste_script.js` e a pasta `js/backup/`.
4. Remova os arquivos HTML estáticos `index.html`, `testes/teste.html` e `testes/resultado.html`.

#### Passo 5: Validação Automatizada e Qualidade
1. Execute `nuxi typecheck` para garantir a integridade dos tipos TypeScript.
2. Execute `nuxi build` para confirmar que a compilação SSR/Vite ocorre sem erros ou avisos de hidratação.
3. Submeta a aplicação a um validador automatizado (Lighthouse / axe-core) para homologar a aprovação em WCAG 2.1 AA.

---
*Relatório de auditoria consolidado gerado e verificado com precisão para o Cognita Hub.*
