# Original User Request

## Initial Request — 2026-07-30T16:16:01Z

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

O projeto consiste em finalizar a página web existente no repositório, corrigindo o alinhamento das colunas, adicionando imagens de placeholder e aplicando um polimento completo. O site deve ficar responsivo e com um visual moderno.

Working directory: c:\github\cognahub
Integrity mode: demo

## Requirements

### R1. Alinhamento e Layout Estruturado
Corrigir as colunas desalinhadas utilizando técnicas modernas de CSS, como Flexbox ou CSS Grid, para garantir um layout consistente, simétrico e bem organizado.

### R2. Inserção de Imagens de Placeholder
Preencher os espaços destinados a mídia (atualmente sem imagem) com imagens de placeholder (por exemplo, via.placeholder.com ou imagens locais disponíveis) em tamanhos apropriados para o contexto da página.

### R3. Responsividade e Modernização Visual
O design deve ser aprimorado para refletir uma estética moderna e premium. Além disso, a página deve ser totalmente responsiva, adaptando o conteúdo corretamente para dispositivos móveis, tablets e telas grandes.

## Acceptance Criteria

### Estrutura e Estilização
- [ ] O código HTML/CSS foi atualizado para usar `display: flex` ou `display: grid` nas seções de colunas, resolvendo os problemas de alinhamento.
- [ ] O arquivo CSS contém `media queries` (ex: `@media (max-width: 768px)`) que adaptam o layout corretamente para telas pequenas (ex: mudando layout de colunas para linhas).

### Elementos Visuais
- [ ] O arquivo `index.html` contém tags `<img>` com `src` apontando para serviços de placeholder ou imagens locais existentes, preenchendo todos os blocos vazios.
- [ ] A página pode ser verificada manualmente abrindo-a em um navegador (usando recursos locais sem dependências externas complexas).

## Follow-up — 2026-07-30T16:40:23Z

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

O projeto consiste em realizar uma auditoria completa no site (Cognita Hub) focada em avaliar a acessibilidade (WCAG), a carga cognitiva para os usuários e a integridade de código (boas práticas do ecossistema Vue/Nuxt). 

Working directory: c:\github\cognahub
Integrity mode: development

## Requirements

### R1. Avaliação de Acessibilidade (a11y)
Auditar o código gerado em busca de barreiras de acessibilidade, checando contraste de cores, suporte a leitores de tela (ARIA), atributos alt e navegação por teclado, apontando violações de diretrizes (como WCAG).

### R2. Avaliação de Carga Cognitiva e UX
Analisar o layout, a densidade de texto, o agrupamento de elementos e a clareza visual para determinar se a página atual sobrecarrega a atenção do usuário ou se apresenta uma experiência fluida.

### R3. Integridade do Código Vue/Nuxt
Avaliar as boas práticas técnicas da recente migração. O código segue as convenções do Nuxt 3? O uso do Vue (composition API, estrutura de templates) está eficiente? Há pontos de atenção de performance?

### R4. Geração de Relatório
A equipe deve consolidar todas as descobertas em um único documento Markdown detalhado, sem realizar alterações diretas no código-fonte da aplicação.

## Acceptance Criteria

### Verificação do Relatório
- [ ] Um arquivo `auditoria_cognahub.md` foi gerado na raiz do projeto (`c:\github\cognahub`).
- [ ] O documento contém uma avaliação clara sobre Acessibilidade com pontos de melhoria acionáveis.
- [ ] O documento discute a Carga Cognitiva da interface baseada na análise dos componentes.
- [ ] O documento avalia criticamente a integridade do código Vue/Nuxt (como o estado do `app.vue`).
- [ ] Nenhum arquivo do site original (`app.vue`, `package.json`, etc) foi modificado pelos agentes durante este processo (verificação de modo leitura/avaliação).

---
*Next: when approved → delegate via invoke_subagent (see Delegation Protocol)*

## Follow-up — 2026-07-30T16:55:33Z

# Teamwork Project Prompt — Draft

> Status: Launched
> Goal: Craft prompt → get user approval → delegate to teamwork_preview

O projeto consiste em refatorar o código do site para implementar as correções apontadas no relatório `auditoria_cognahub.md`, focando em acessibilidade, componentização inteligente e redução da carga cognitiva na interface.

Working directory: c:\github\cognahub
Integrity mode: development

## Requirements

### R1. Resolução de Acessibilidade (a11y)
Ler o arquivo `auditoria_cognahub.md` e corrigir todas as falhas de acessibilidade encontradas no código, garantindo uso adequado de ARIA, contrastes, navegação via teclado e estrutura semântica (HTML5).

### R2. Refatoração de Código e Nuxt UI
Refatorar a estrutura monolítica atual (`app.vue`) em pequenos componentes na pasta `components/` seguindo as boas práticas do Vue/Nuxt. Utilizar os componentes nativos do Nuxt UI quando recomendado pelo relatório.

### R3. Redução de Carga Cognitiva (UX)
Implementar as mudanças visuais e de design recomendadas no relatório para simplificar a navegação, melhorar agrupamentos (Gestalt) e dar mais respiro à interface, focando na melhoria da experiência do usuário.

## Acceptance Criteria

### Verificação da Implementação
- [ ] O arquivo `app.vue` foi refatorado, extraindo partes lógicas e de interface para componentes individuais (`components/*.vue`).
- [ ] As violações de acessibilidade listadas no `auditoria_cognahub.md` foram ativamente corrigidas no novo código.
- [ ] O design atualizado reflete as recomendações de redução de carga cognitiva, mantendo a responsividade (mobile/tablet/desktop) intacta.
- [ ] O projeto executa sem erros de compilação ou de linting após as refatorações.

---
*Next: when approved → delegate via invoke_subagent (see Delegation Protocol)*

