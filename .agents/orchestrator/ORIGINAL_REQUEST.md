# Original User Request

## Audit Request — 2026-07-30T16:40:23Z

# Teamwork Project Prompt — Cognita Hub Codebase Audit

> Status: Launched
> Goal: Comprehensive Audit (Accessibility, Cognitive Load & UX, Vue 3 / Nuxt 3 Code Integrity) → Markdown Report

O projeto consiste em realizar uma auditoria completa no site (Cognita Hub) focada em avaliar a acessibilidade (WCAG), a carga cognitiva para os usuários e a integridade de código (boas práticas do ecossistema Vue/Nuxt). 

Working directory: c:\github\cognahub
Integrity mode: read-only audit

## Requirements

### R1. Avaliação de Acessibilidade (a11y)
Auditar o código gerado em busca de barreiras de acessibilidade, checando contraste de cores, suporte a leitores de tela (ARIA), atributos alt e navegação por teclado, apontando violações de diretrizes (como WCAG 2.1).

### R2. Avaliação de Carga Cognitiva e UX
Analisar o layout, a densidade de texto, o agrupamento de elementos e a clareza visual para determinar se a página atual sobrecarrega a atenção do usuário ou se apresenta uma experiência fluida.

### R3. Integridade do Código Vue/Nuxt
Avaliar as boas práticas técnicas da recente migração. O código segue as convenções do Nuxt 3? O uso do Vue (composition API, estrutura de templates) está eficiente? Há pontos de atenção de performance (especialmente avaliando `app.vue` e estrutura geral)?

### R4. Geração de Relatório
A equipe deve consolidar todas as descobertas em um único documento Markdown detalhado (`c:\github\cognahub\auditoria_cognahub.md`), sem realizar alterações diretas no código-fonte da aplicação.

## Acceptance Criteria

### Verificação do Relatório
- [ ] Um arquivo `auditoria_cognahub.md` foi gerado na raiz do projeto (`c:\github\cognahub`).
- [ ] O documento contém uma avaliação clara sobre Acessibilidade com pontos de melhoria acionáveis.
- [ ] O documento discute a Carga Cognitiva da interface baseada na análise dos componentes.
- [ ] O documento avalia criticamente a integridade do código Vue/Nuxt (como o estado do `app.vue`).
- [ ] Nenhum arquivo do site original (`app.vue`, `package.json`, `index.html`, etc) foi modificado pelos agentes durante este processo (verificação de modo leitura/avaliação).
