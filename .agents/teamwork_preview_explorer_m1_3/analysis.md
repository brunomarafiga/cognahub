# Detailed Media Assets & Aesthetic Analysis - Cognahub

## 1. Executive Summary

This report provides a comprehensive investigation of the media assets, placeholder needs, visual hierarchy, layout alignment, responsiveness, and modern aesthetic requirements for **Cognita Hub** (Milestone 1).

Key Findings:
1. **Missing Fallback Asset**: `js/script.js` references `img/placeholder.jpg` as fallback for missing/broken resource covers, but `img/placeholder.jpg` does NOT exist in `img/`.
2. **Heavy Image Asset**: `img/quiz-sociais.png` is **1.88 MB**, causing unnecessary network overhead on page load.
3. **External Logo & Favicon Gaps**: The header logo in `index.html` relies on an external URL (`https://sociaisaplicadas.ufpr.br/...`), and `favicon.ico` is missing from the project root.
4. **Invalid & Empty Image URLs in Data**: `json/categorias.json` contains empty cover strings (`"capa": ""`), invalid domain URLs (e.g. `yt3..com`), and placeholder URLs (`novo-link-para-imagem.com`).
5. **Legacy Palette Inconsistencies**: `css/style.css` and `css/testes_style.css` contain leftover Spotify dark theme rules (`--spotify-green`, `#1DB954`) conflicting with Cognita Hub's brand palette (`--cognita-bg-main: #0D1B2A`, `--cognita-accent1: #E76F51`, `--cognita-accent2: #A2D2FF`).
6. **Missing Accessibility Attributes**: Quiz card images in `index.html` have empty alt tags (`alt=""`).

---

## 2. Directory & Asset Audit

### 2.1 Media Directory (`c:\github\cognahub\img\`)
| File | Dimensions / Size | Purpose | Status / Issues |
|---|---|---|---|
| `quiz-sociais.png` | 1,888,208 bytes (~1.88 MB) | Card image for Social Sciences quiz | **Unoptimized**: Too large for 180px web card; should be compressed to ~50-100KB |
| `quiz-dados.jpeg` | 53,444 bytes (~53 KB) | Card image for Data Management quiz | Optimal size |
| `quiz-projetos.jpeg` | 50,763 bytes (~51 KB) | Card image for Project Management quiz | Optimal size |
| `placeholder.jpg` | **MISSING** | Target fallback for JS broken image handler | **Critical Bug**: JS points to this file, causing HTTP 404s when images fail or are empty |
| `favicon.ico` | **MISSING** | Webpage browser tab icon | **Missing**: HTML references `favicon.ico`, but file does not exist |

### 2.2 Scripts & Data (`js/` and `json/`)
- `js/script.js` (lines 193-200):
  ```javascript
  const temCapaValida = recurso.capa && recurso.capa.trim() !== '';
  const capaSrc = temCapaValida ? recurso.capa : 'img/placeholder.jpg';
  capaHtml = `
      <div class="recurso-capa">
          <img src="${capaSrc}" alt="${altText}" 
               onerror="this.onerror=null; this.src='img/placeholder.jpg'; this.alt='Imagem indisponível';">
      </div>`;
  ```
- `json/categorias.json`:
  - 4 items have empty string covers (`"capa": ""`): *Instituto Information Management*, *IRMS*, *Paperless Movement*, *Portal de Periódicos CAPES*.
  - 1 item has a domain syntax error: `"capa": "https://yt3..com/..."` (double dot `yt3..com`).
  - 1 item has a fake placeholder domain: `"capa": "https://novo-link-para-imagem.com/imagem.jpg"`.
  - 3 items share the exact same Amazon cover image (`51-nXsSRfZL._SY445_SX342_.jpg`).

---

## 3. Aesthetic & Visual Polish Evaluation

### 3.1 Color Palette & Brand Consistency
Cognita Hub defines its dark mode aesthetic in `css/style.css` (lines 1-10):
- `--cognita-bg-main`: `#0D1B2A` (Deep Night Blue)
- `--cognita-bg-surface`: `#1B263B` (Dark Slate Blue)
- `--cognita-accent1`: `#E76F51` (Vibrant Burnt Orange)
- `--cognita-accent2`: `#A2D2FF` (Light Glacial Blue)
- `--cognita-text-primary`: `#F0F8FF` (Ice White)
- `--cognita-text-secondary`: `#BCCCDC` (Light Bluish Gray)
- `--cognita-border-subtle`: `#2A3A4F`

**Identified Issues**:
- `css/style.css` has leftover legacy classes using `--spotify-*` variables (lines 246, 262, 271, 315, 329, 359, 365, 615, 622, 638, 657, 666, 670, 678, 698, 707, 719, 755, 867, 873).
- `css/testes_style.css` uses `--primary-color: var(--spotify-green, #1DB954);`, giving the quiz interface a Spotify green appearance instead of Cognita Hub's burnt orange/glacial blue branding.

### 3.2 Layout Alignment & Flex/Grid Structure
1. **Quiz Grid (`.quiz-grid`)**:
   - Styled with `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.8rem;` or `2rem`.
   - Needs `height: 100%` on `.quiz-card` and `aspect-ratio: 16/9; object-fit: cover;` on `.card-icon` to maintain consistent height across responsive grid items.
2. **Resources Grid (`.categorias-grid`)**:
   - Styled with `display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem;`.
   - `.categoria` cards have flex column structure. Works well, but needs standardized min-height and padding.
3. **Resource Items (`.recurso-card`)**:
   - Featured item shows full cover; non-featured items show small 40x40 thumbnail on hover.
   - Hover transition currently toggles `display: block` / `display: none` which can cause slight layout shift if padding/margin is not explicitly budgeted.

### 3.3 Typography & Hierarchy
- Fonts imported in `index.html`: `Poppins` (Body) and `Montserrat` (Headings).
- Hierarchy is clean:
  - Hero H1: `clamp(2.25rem, 5vw, 3rem)`
  - Section H2: `clamp(1.8rem, 4vw, 2.5rem)`
  - Card H3: `1.3rem` - `1.4rem`
  - Resource H4: `0.9rem` - `0.95rem` with `text-overflow: ellipsis; white-space: nowrap;`.

---

## 4. Implementation Recommendations for Worker Agent

### Requirement R1: Flex/Grid Layout Alignment
1. **Equal Card Heights**: Set `display: flex; flex-direction: column; height: 100%;` on `.quiz-card` and `.categoria`.
2. **Fixed Media Aspect Ratios**: Apply `aspect-ratio: 16/9; width: 100%; object-fit: cover;` to `.quiz-card .card-icon` and `.recurso-capa img`.
3. **Creator Section Layout**: Enhance `.creator-content` with a flex container (`display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; justify-content: center;`) including a creator avatar placeholder.

### Requirement R2: Placeholder Images & Empty Slots
1. **Create Local SVG Placeholders in `img/`**:
   - Create `img/placeholder.svg` (or `.jpg`) formatted with Cognita Hub dark slate background (`#1B263B`), brand icon, and "Cognita Hub" text.
   - Dimensions: 300x169px (16:9 ratio).
2. **Update JS Fallback Target**:
   - In `js/script.js`, change fallback target from `img/placeholder.jpg` to `img/placeholder.svg` (or create both).
3. **Local Logo & Favicon**:
   - Provide local `img/logo-ufpr.png` or `img/logo-cognita.svg` to eliminate reliance on external host `sociaisaplicadas.ufpr.br`.
   - Provide `favicon.ico` in the project root.
4. **Fix Data Errors**:
   - Clean up invalid URLs in `json/categorias.json`.

### Requirement R3: Responsive Media Queries & Modern Aesthetic
1. **Palette Unification**:
   - Replace all remaining `--spotify-*` variable references in `css/style.css` and `css/testes_style.css` with `--cognita-*` variables (`--cognita-accent1: #E76F51`, `--cognita-accent2: #A2D2FF`, `--cognita-bg-surface: #1B263B`).
2. **Image Optimization**:
   - Compress `img/quiz-sociais.png` from 1.88 MB down to <100 KB WebP/PNG.
3. **Accessibility (a11y)**:
   - Add descriptive `alt` text to all quiz card images in `index.html`.
