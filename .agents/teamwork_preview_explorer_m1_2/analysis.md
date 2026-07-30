# Cognita Hub — Comprehensive CSS & Responsiveness Analysis

**Author**: Explorer 2 (CSS & Responsiveness Specialist)  
**Target Path**: `c:\github\cognahub\css\` & `c:\github\cognahub\index.html`  
**Date**: 2026-07-30  
**Status**: Completed  

---

## 1. Executive Summary

An in-depth structural inspection of `css/style.css` (1,345 lines) and `css/testes_style.css` (557 lines) reveals significant architectural fragmentation, conflicting design tokens, syntax errors, and responsiveness defects causing column misalignments on mobile, tablet, and desktop viewports.

Key findings include:
- **Design System Fragmentation**: Mixed usage of modern `:root` tokens (`--cognita-*`) alongside obsolete Spotify tokens (`--spotify-*`) and undeclared variables (`--background-light`), leading to inconsistent styling.
- **Column Misalignment**: Unconstrained `repeat(auto-fit, minmax(280px, 1fr))` on grid containers (`.categorias-grid`, `.quiz-grid`, `.benefits-grid`, `.footer-container`) causes 4 category cards to break into asymmetrical 3+1 layouts on tablet viewports (769px–1023px).
- **Mobile Navigation Defects**: Direct contradiction between two `@media (max-width: 768px)` blocks, combined with a missing `<button class="nav-toggle">` element in `index.html`.
- **CSS Syntax & Rule Collisions**: Invalid CSS syntax (`var (` with space, `copyright-text` missing class dot `.`), multiple duplicate declarations of `.recurso-card`, `.categoria`, and `.site-footer` causing unpredictable cascade overrides.

---

## 2. Inventory of CSS Files & Code Structure

| File | Lines | Size | Primary Scope | Critical Issues Found |
|---|---|---|---|---|
| `css/style.css` | 1345 | 35.5 KB | Main site styling (`index.html`) | - Syntax errors (`var (`, missing `.copyright-text`) <br>- Conflicting Spotify vs Cognita variables <br>- Duplicate declarations (3 separate `.recurso-card` definitions) <br>- Contradictory `@media (max-width: 768px)` queries |
| `css/testes_style.css` | 557 | 14.7 KB | Quiz & test pages (`testes/teste.html`) | - Undefined variable `var(--background-light)` <br>- Brand accent color mismatch (`--primary-color` defaults to Spotify green `#1DB954` instead of Cognita burnt orange `#E76F51`) <br>- Selector mismatch (`.next-btn` vs HTML `.next-question-btn`) |

---

## 3. Detailed Layout Approach & Column Misalignment Analysis

### 3.1 Existing Layout Technologies
- **Flexbox**: Employed for `.nav-container`, `.site-nav ul`, `.page-wrapper`, `.recurso-card` internal layout, `.social-links`, `.footer-contact p`, `.level-buttons`, `.options-container`, `.results-actions`.
- **CSS Grid**: Employed for `.categorias-grid`, `.quiz-grid`, `.benefits-grid`, `.footer-container`, `.footer-content`.
- **Inline-Block**: Used in `.cta-button.hero-cta`, `.benefit-icon`, `.level-btn`.
- **Absolute Positioning**: Used for mobile nav dropdown (`ul#nav-menu`), screen reader accessibility (`.sr-only`), and custom radio button indicators (`input[type="radio"]:checked::after`).

### 3.2 Specific Rules Causing Column Misalignments

#### 1. Asymmetrical Grid Wrapping on Intermediate Viewports (769px – 1023px)
- **Rules**:
  - `style.css:959`: `.recursos-section .categorias-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }`
  - `style.css:1183`: `.quiz-section .quiz-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }`
- **Defect Mechanics**:
  - The resources section contains **4 categories** (`Livros`, `Podcasts`, `Canais do YouTube`, `Sites de Notícias`).
  - At a viewport width of ~900px (standard tablet portrait/small laptop), `4 * 280px + gaps = ~1180px`, which exceeds the available width.
  - CSS Grid recalculates column count to `floor(available_width / minmax_width)` = 3 columns.
  - As a result, Row 1 contains 3 cards, while Row 2 contains 1 single card occupying the first column, leaving 66% empty space on the right half of Row 2.
  - Similarly, `.quiz-grid` contains 3 cards. On screens around 600px–750px, `auto-fit` wraps 2 cards onto Row 1 and 1 solitary card onto Row 2.

#### 2. Dynamic Content Height Instability in Resource Cards (`.recurso-card`)
- **Rules**:
  - `style.css:1112`: `.recurso-descricao { max-height: 0; opacity: 0; transition: ... }`
  - `style.css:1146`: `.recurso-item:not(.item-featured):hover .recurso-descricao { max-height: 70px; opacity: 1; }`
  - `style.css:1306`: `.recurso-card { align-items: center; }` vs `style.css:804`: `.recurso-card { align-items: flex-start; }`
- **Defect Mechanics**:
  - Hovering over non-featured resource items expands `.recurso-descricao` height from 0px to 70px and displays thumbnail images dynamically.
  - Because category containers use flex/grid defaults, expanding an individual item shifts the vertical position of adjacent resource items and sibling cards, causing visible layout jittering and container bouncing.

#### 3. Broken Selectors & Duplicate Rule Overrides
- **Rule Syntax Error**: `style.css:516` defines `copyright-text { border-top: 1px solid var(--cognita-border-subtle); ... }` without the class dot `.`. Browsers parse `copyright-text` as an invalid custom HTML element tag and ignore it.
- **Variable Call Syntax Error**:
  - Line 83: `color: var (--cognita-text-primary);` (space between `var` and `(`).
  - Line 101: `color: var (--cognita-text-secondary);`
  - Line 657: `color: var (--spotify-text-secondary);`
  - Line 1169: `color: var (--transition-speed);`
  Browsers treat `var (` with a space as an invalid CSS function, resulting in unapplied styles or property drop.
- **Rule Cascade Collision**:
  - `.recurso-card` is declared in lines 296, 802, 1035, and 1298 with conflicting properties (`flex-direction: row` vs `column`, `align-items: flex-start` vs `center`).
  - `.site-footer` is declared at line 451 with `--cognita-*` colors and re-declared at line 621 with `--spotify-*` colors.

---

## 4. Media Query (`@media`) Audit & Breakpoint Gap Analysis

### 4.1 Existing Media Queries Audit

```
style.css:
  ├── @media (max-width: 768px)  [Lines 525-611]  --> Mobile nav dropdown, container 95%, 1-col footer
  ├── @media (max-width: 600px)  [Lines 883-898]  --> Resource card column layout switch
  ├── @media (max-width: 992px)  [Lines 901-905]  --> H1 / H2 font size adjustment
  ├── @media (max-width: 768px)  [Lines 907-928]  --> CONFLICTING mobile header flex layout
  └── @media (max-width: 480px)  [Lines 930-949]  --> Small mobile fonts, CTA padding

testes_style.css:
  ├── @media (max-width: 768px)  [Lines 326-330]  --> Container padding reduction
  └── @media (max-width: 768px)  [Lines 522-556]  --> Quiz card padding, stacked buttons
```

### 4.2 Critical Breakpoint Gaps

1. **Missing Tablet Breakpoint (768px to 1024px)**:
   - There is no `@media (max-width: 1024px)` query to adjust 4-column category grids into clean 2x2 grids.
   - iPad portrait (768px) and landscape (1024px) viewports suffer from cramped resource lists and uneven grid wrapping.
2. **Conflicting Mobile Navigation Queries at 768px**:
   - `style.css:535` sets `.site-nav ul#nav-menu { position: absolute; top: calc(100% + 1px); right: 0; width: 280px; flex-direction: column; opacity: 0; visibility: hidden; }`
   - `style.css:912` sets `.site-nav ul { margin-top: 1rem; flex-wrap: wrap; justify-content: center; }`
   - These two media query blocks overwrite each other unpredictably depending on source order in `style.css`.
3. **Missing Hamburger Toggle in HTML**:
   - `index.html` (lines 24-41) does not contain a `<button class="nav-toggle">` element. Without this markup, mobile navigation scripts fail to toggle `is-active`, locking navigation on mobile screens.

---

## 5. Modern CSS Architecture Recommendations

To modernize Cognita Hub's styling, establish a unified design system and resolve layout misalignments, the following architectural upgrades are recommended:

### 5.1 Unified CSS Custom Properties (`:root`)
Replace all fragmented design tokens with a single, cohesive design token system in `style.css` and reference it in `testes_style.css`:

```css
:root {
    /* Cognita Hub Palette */
    --cognita-bg-main: #0D1B2A;         /* Deep Night Blue */
    --cognita-bg-surface: #1B263B;      /* Dark Slate Blue */
    --cognita-bg-card: #223049;         /* Elevated Card Surface */
    --cognita-accent-orange: #E76F51;   /* Burnt Orange */
    --cognita-accent-blue: #A2D2FF;     /* Glacial Blue */
    --cognita-text-primary: #F0F8FF;    /* Ice White */
    --cognita-text-secondary: #BCCCDC;  /* Muted Light Gray-Blue */
    --cognita-border-subtle: #2A3A4F;   /* Subtle Border */
    --cognita-border-glow: #3D5270;     /* Highlight Border */

    /* Status Colors */
    --cognita-success: #2EC4B6;
    --cognita-error: #E63946;

    /* Typography */
    --font-headings: 'Montserrat', -apple-system, sans-serif;
    --font-body: 'Poppins', -apple-system, sans-serif;

    /* Layout & Spacing */
    --container-max-width: 1200px;
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-pill: 50px;

    /* Modern Glassmorphic Elevation & Shadows */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.25);
    --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.35);
    --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.45);
    --shadow-orange-glow: 0 4px 20px rgba(231, 111, 81, 0.25);

    /* Motion */
    --transition-fast: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 5.2 Responsive CSS Grid Strategy
Establish strict grid column templates per standard breakpoint range:

```css
/* Seção de Recursos (4 Categoria Cards) */
.categorias-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.75rem;
}

/* Seção de Desafios (3 Quiz Cards) */
.quiz-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

/* Seção de Benefícios (3 Items) */
.benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

/* Seção de Rodapé (3 Colunas) */
.footer-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 2.5rem;
}

/* Breakpoint: Desktop Small / Tablet Landscape (769px - 1024px) */
@media (max-width: 1024px) {
    .categorias-grid {
        grid-template-columns: repeat(2, 1fr); /* Clean 2x2 grid */
        gap: 1.5rem;
    }
    .quiz-grid {
        grid-template-columns: repeat(3, 1fr);
    }
    .footer-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Breakpoint: Mobile (<= 768px) */
@media (max-width: 768px) {
    .categorias-grid,
    .quiz-grid,
    .benefits-grid,
    .footer-container {
        grid-template-columns: 1fr; /* Single column stack */
        gap: 1.5rem;
    }
}
```

### 5.3 Card Elevation, Shadows, Gradients, and Hover Animations
- **Hero Section**: Modern dark gradient background with accent glow:
  `background: radial-gradient(circle at 50% 0%, #1B263B 0%, #0D1B2A 70%);`
- **Card Hover Effects**: Smooth 3D lift with glow shadow:
  ```css
  .categoria,
  .quiz-card {
      background-color: var(--cognita-bg-surface);
      border: 1px solid var(--cognita-border-subtle);
      border-radius: var(--radius-md);
      transition: var(--transition-smooth);
  }

  .categoria:hover,
  .quiz-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-lg), var(--shadow-orange-glow);
      border-color: var(--cognita-accent-orange);
  }
  ```
- **Sticky Navigation**: Backdrop blur glassmorphism:
  ```css
  .main-navigation {
      background-color: rgba(27, 38, 59, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--cognita-border-subtle);
  }
  ```

---

## 6. HTML & CSS Synchronization Checklist

1. **Add Toggle Button in `index.html`**: Insert `<button class="nav-toggle" id="nav-toggle" aria-label="Menu de Navegação"><i class="fas fa-bars"></i></button>` inside `.nav-container`.
2. **Fix Invalid CSS Selectors**: Correct `copyright-text` to `.copyright-text`.
3. **Fix CSS `var (` Space Syntax Errors**: Search and replace `var (` with `var(`.
4. **Purge Spotify Legacy Rules**: Delete duplicate blocks referencing `--spotify-*` in lines 240-390 and lines 620-790 of `style.css`.
5. **Harmonize `testes_style.css`**: Update `:root` variables in `testes_style.css` to consume Cognita Hub tokens (`--cognita-accent-orange`).
