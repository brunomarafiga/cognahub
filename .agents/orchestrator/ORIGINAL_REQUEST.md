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
