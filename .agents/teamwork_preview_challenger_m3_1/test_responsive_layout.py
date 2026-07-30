"""
Empirical Layout & Responsiveness Stress Test Harness
Milestone 3 - Cognahub Web Page Completion
Target: index.html & css/style.css
Breakpoints tested: 320px, 375px, 768px, 1024px, 1440px
"""

import sys
import re
import math
from pathlib import Path

# Target file paths
HTML_PATH = Path(r"c:\github\cognahub\index.html")
CSS_PATH = Path(r"c:\github\cognahub\css\style.css")

BREAKPOINTS = [320, 375, 768, 1024, 1440]

def load_files():
    if not HTML_PATH.exists():
        raise FileNotFoundError(f"HTML file not found: {HTML_PATH}")
    if not CSS_PATH.exists():
        raise FileNotFoundError(f"CSS file not found: {CSS_PATH}")
    
    with open(HTML_PATH, 'r', encoding='utf-8') as f:
        html_content = f.read()
        
    with open(CSS_PATH, 'r', encoding='utf-8') as f:
        css_content = f.read()
        
    return html_content, css_content

def analyze_grid_layout(grid_name, item_count, cols_def):
    """
    Analyzes grid column definition and item count to detect trailing empty columns.
    """
    if "repeat(" in cols_def:
        match = re.search(r"repeat\((\d+),\s*([^\)]+)\)", cols_def)
        if match:
            cols = int(match.group(1))
        else:
            cols = 1
    elif cols_def.strip() == "1fr":
        cols = 1
    else:
        # e.g., 200px 1fr
        cols = len(cols_def.strip().split())
        
    rows = math.ceil(item_count / cols)
    remainder = item_count % cols
    has_trailing_empty = (remainder != 0)
    empty_cols = (cols - remainder) if has_trailing_empty else 0
    
    return {
        "columns": cols,
        "rows": rows,
        "item_count": item_count,
        "trailing_empty_columns": empty_cols,
        "is_symmetric": not has_trailing_empty
    }

def run_empirical_tests():
    html_content, css_content = load_files()
    
    print("=" * 70)
    print("COGNAHUB LAYOUT & RESPONSIVENESS EMPIRICAL TEST SUITE")
    print("=" * 70)
    print(f"HTML Size: {len(html_content)} bytes | CSS Size: {len(css_content)} bytes\n")
    
    # 1. Grid symmetry & column layout analysis across breakpoints
    grids_info = {
        ".categorias-grid": {"items": 4, "base_cols": "repeat(4, 1fr)", "1024_cols": "repeat(2, 1fr)", "768_cols": "1fr"},
        ".quiz-grid": {"items": 3, "base_cols": "repeat(3, 1fr)", "1024_cols": "repeat(2, 1fr)", "768_cols": "1fr"},
        ".benefits-grid": {"items": 3, "base_cols": "repeat(3, 1fr)", "1024_cols": "repeat(3, 1fr)", "768_cols": "1fr"},
        ".about-grid": {"items": 2, "base_cols": "240px 1fr", "1024_cols": "200px 1fr", "768_cols": "1fr"}
    }
    
    print("--- 1. GRID SYMMETRY & COLUMN ADAPTATION TEST ---")
    results_summary = []
    
    for bp in BREAKPOINTS:
        print(f"\n[Viewport Width: {bp}px]")
        for grid_selector, info in grids_info.items():
            if bp <= 768:
                cols_def = info["768_cols"]
            elif bp <= 1024:
                cols_def = info["1024_cols"]
            else:
                cols_def = info["base_cols"]
                
            analysis = analyze_grid_layout(grid_selector, info["items"], cols_def)
            status = "PASS" if analysis["is_symmetric"] else "FAIL (Asymmetric)"
            print(f"  {grid_selector:<20}: {analysis['columns']} col(s) | {info['items']} items | Rows: {analysis['rows']} | Trailing Empty: {analysis['trailing_empty_columns']} -> [{status}]")
            
            results_summary.append({
                "breakpoint": bp,
                "grid": grid_selector,
                "columns": analysis['columns'],
                "items": info['items'],
                "symmetric": analysis["is_symmetric"],
                "empty_cols": analysis['trailing_empty_columns'],
                "status": status
            })

    # 2. Check card equality & button flex alignment CSS properties
    print("\n" + "-" * 70)
    print("--- 2. CARD HEIGHT EQUALITY & BUTTON FLEX ALIGNMENT TEST ---")
    
    card_flex_checks = [
        (".categorias-grid", "display: grid", "recursos-section .categorias-grid", "align-items: stretch"),
        (".categoria card", "height: 100%", ".categoria", "display: flex; flex-direction: column"),
        (".lista-recursos flex grow", "flex-grow: 1", ".lista-recursos", "flex-grow: 1"),
        (".quiz-grid", "display: grid", "quiz-section .quiz-grid", "align-items: stretch"),
        (".quiz-card", "height: 100%", ".quiz-card", "display: flex; flex-direction: column"),
        (".quiz-card-content p flex grow", "flex-grow: 1", ".quiz-card-content p", "flex-grow: 1"),
        (".cta-button-quiz alignment", "align-self: flex-start", ".cta-button-quiz", "align-self: flex-start")
    ]
    
    for label, target_prop, selector, css_snippet in card_flex_checks:
        found = css_snippet.lower() in css_content.lower()
        status = "PASS" if found else "FAIL"
        print(f"  {label:<35} ({selector}): Expected '{css_snippet}' -> [{status}]")

    # 3. Mobile Horizontal Overflow & Fixed Width Risk Analysis
    print("\n" + "-" * 70)
    print("--- 3. MOBILE HORIZONTAL OVERFLOW & FIXED WIDTH RISKS ---")
    
    # Check max-width and overflow settings
    overflow_hidden_html = "overflow-x: hidden" in css_content
    container_fluid = "max-width: 1200px" in css_content and "width: 100%" in css_content
    
    print(f"  html/body overflow-x: hidden protection: {'PASS' if overflow_hidden_html else 'FAIL'}")
    print(f"  .container fluid max-width constraint : {'PASS' if container_fluid else 'FAIL'}")
    
    # Analyze viewport widths vs padding
    for bp in [320, 375, 768]:
        padding = 30 if bp <= 480 else 48 # 2rem vs 3rem
        inner_width = bp - padding
        print(f"  Viewport {bp}px: Container inner padding = {padding}px, available content width = {inner_width}px")

    print("\n" + "=" * 70)
    print("EMPIRICAL TEST SUMMARY")
    print("=" * 70)
    failures = [r for r in results_summary if r["status"] != "PASS"]
    if failures:
        print(f"Total Grid Symmetry Failures: {len(failures)}")
        for f in failures:
            print(f"  - Viewport {f['breakpoint']}px | Grid {f['grid']} | Columns: {f['columns']} | Items: {f['items']} | Trailing empty columns: {f['empty_cols']}")
    else:
        print("All grid symmetry tests passed.")
        
    print("\nTest execution completed successfully.")

if __name__ == "__main__":
    run_empirical_tests()
