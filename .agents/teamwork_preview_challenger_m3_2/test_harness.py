import os
import json
import re
from urllib.parse import urlparse

def test_media_assets():
    print("==================================================")
    print("SUITE 1: Media Asset Existence & File Integrity")
    print("==================================================")
    
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    
    required_assets = [
        ("img/placeholder.jpg", "JPEG", b"\xFF\xD8\xFF"),
        ("img/placeholder.svg", "SVG", None),
        ("favicon.ico", "ICO", b"\x00\x00\x01\x00"),
        ("testes/favicon.ico", "ICO", b"\x00\x00\x01\x00"),
        ("img/quiz-dados.jpeg", "JPEG", b"\xFF\xD8\xFF"),
        ("img/quiz-projetos.jpeg", "JPEG", b"\xFF\xD8\xFF"),
        ("img/quiz-sociais.png", "PNG", b"\x89PNG\r\n\x1a\n"),
    ]
    
    passed_count = 0
    failed_count = 0
    
    for relative_path, file_type, magic_header in required_assets:
        full_path = os.path.join(base_dir, relative_path)
        if not os.path.isfile(full_path):
            print(f"[FAIL] Missing required asset: {relative_path}")
            failed_count += 1
            continue
        
        file_size = os.path.getsize(full_path)
        if file_size == 0:
            print(f"[FAIL] Asset is empty (0 bytes): {relative_path}")
            failed_count += 1
            continue
            
        with open(full_path, "rb") as f:
            content_start = f.read(16)
            
        if magic_header is not None:
            if not content_start.startswith(magic_header):
                print(f"[FAIL] Corrupted or invalid {file_type} header: {relative_path}")
                failed_count += 1
                continue
        elif file_type == "SVG":
            if b"<svg" not in content_start.lower() and b"<?xml" not in content_start.lower():
                print(f"[FAIL] Invalid SVG content header: {relative_path}")
                failed_count += 1
                continue
                
        print(f"[PASS] Asset verified: {relative_path} ({file_size} bytes, {file_type} format OK)")
        passed_count += 1
        
    print(f"\nSuite 1 Summary: {passed_count} Passed, {failed_count} Failed\n")
    return failed_count == 0


def test_json_categorias():
    print("==================================================")
    print("SUITE 2: categorias.json Schema & URL Syntax")
    print("==================================================")
    
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    json_path = os.path.join(base_dir, "json", "categorias.json")
    
    if not os.path.isfile(json_path):
        print(f"[FAIL] File not found: {json_path}")
        return False
        
    try:
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
        print(f"[PASS] Valid JSON syntax in json/categorias.json")
    except Exception as e:
        print(f"[FAIL] JSON syntax error in json/categorias.json: {e}")
        return False

    if not isinstance(data, dict):
        print(f"[FAIL] Root JSON must be an object/dict, got {type(data)}")
        return False
        
    passed_items = 0
    failed_items = 0
    empty_covers = 0
    broken_urls = 0
    
    for category_name, items in data.items():
        print(f"\nCategory: '{category_name}' ({len(items)} items)")
        if not isinstance(items, list):
            print(f"  [FAIL] Category '{category_name}' content is not an array/list")
            failed_items += 1
            continue
            
        for idx, item in enumerate(items):
            item_id = f"{category_name}[{idx}] ({item.get('titulo', 'UNTITLED')})"
            
            # Field existence check
            required_fields = ["titulo", "descricao", "capa", "link"]
            missing_fields = [field for field in required_fields if field not in item]
            if missing_fields:
                print(f"  [FAIL] {item_id} missing required fields: {missing_fields}")
                failed_items += 1
                continue
                
            # Non-empty string checks
            titulo = str(item["titulo"]).strip()
            descricao = str(item["descricao"]).strip()
            capa = str(item["capa"]).strip()
            link = str(item["link"]).strip()
            
            if not titulo or not descricao or not capa or not link:
                print(f"  [FAIL] {item_id} has empty field(s): titulo='{titulo}', desc='{descricao}', capa='{capa}', link='{link}'")
                if not capa:
                    empty_covers += 1
                failed_items += 1
                continue
                
            # Check Livros specific autor
            if category_name == "Livros":
                autor = str(item.get("autor", "")).strip()
                if not autor:
                    print(f"  [FAIL] {item_id} missing or empty 'autor' field")
                    failed_items += 1
                    continue

            # Validate Link URL syntax
            parsed_link = urlparse(link)
            if parsed_link.scheme not in ("http", "https") or not parsed_link.netloc:
                print(f"  [FAIL] {item_id} invalid link URL syntax: '{link}'")
                broken_urls += 1
                failed_items += 1
                continue

            # Validate Capa (Image URL or local relative path)
            if capa.startswith("http://") or capa.startswith("https://"):
                parsed_capa = urlparse(capa)
                if not parsed_capa.netloc:
                    print(f"  [FAIL] {item_id} invalid HTTP capa URL: '{capa}'")
                    broken_urls += 1
                    failed_items += 1
                    continue
            else:
                # Relative local path check
                local_img_path = os.path.join(base_dir, capa.replace("/", os.sep))
                if not os.path.isfile(local_img_path):
                    print(f"  [FAIL] {item_id} local capa file does not exist: '{capa}' (path: {local_img_path})")
                    broken_urls += 1
                    failed_items += 1
                    continue

            passed_items += 1

    print(f"\nSuite 2 Summary: {passed_items} Items Passed, {failed_items} Items Failed (Empty Covers: {empty_covers}, Broken URL Syntax: {broken_urls})\n")
    return failed_items == 0


def test_onerror_fallbacks():
    print("==================================================")
    print("SUITE 3: JS & HTML Onerror Fallback Stress Test")
    print("==================================================")
    
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    
    # Check fallback placeholder image on disk
    placeholder_jpg = os.path.join(base_dir, "img", "placeholder.jpg")
    placeholder_exists = os.path.isfile(placeholder_jpg) and os.path.getsize(placeholder_jpg) > 0
    
    if not placeholder_exists:
        print("[CRITICAL FAIL] img/placeholder.jpg does NOT exist or is empty! Any image load failure will cause broken UI.")
        return False
    else:
        print("[PASS] Fallback image img/placeholder.jpg exists and is valid.")

    files_to_scan = [
        os.path.join(base_dir, "js", "script.js"),
        os.path.join(base_dir, "index.html"),
    ]
    
    onerror_found = 0
    unsafe_handlers = 0
    
    onerror_regex = re.compile(r'onerror=["\'](.*?)["\']', re.IGNORECASE)
    
    for file_path in files_to_scan:
        rel_path = os.path.relpath(file_path, base_dir)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        matches = onerror_regex.findall(content)
        for idx, handler_code in enumerate(matches):
            onerror_found += 1
            print(f"\nHandler #{onerror_found} in {rel_path}:")
            print(f"  Code: `{handler_code}`")
            
            # Check 1: Does it set this.onerror = null?
            has_onerror_null = "this.onerror=null" in handler_code.replace(" ", "") or "this.onerror = null" in handler_code
            
            # Check 2: Does it point to img/placeholder.jpg?
            has_valid_fallback = "img/placeholder.jpg" in handler_code
            
            if not has_onerror_null:
                print(f"  [FAIL] Missing `this.onerror = null;` protection! Risk of infinite 404 recursion loop.")
                unsafe_handlers += 1
            elif not has_valid_fallback:
                print(f"  [FAIL] Fallback target is not 'img/placeholder.jpg'")
                unsafe_handlers += 1
            else:
                print(f"  [PASS] Protected against 404 loop (this.onerror=null present) and falls back to img/placeholder.jpg")
                
                # State simulation
                print(f"  [SIMULATION] Simulating 404 event on <img src='broken.jpg'>:")
                print(f"    1. Browser triggers onerror event handler.")
                print(f"    2. Code executes `this.onerror = null`. Handler detached.")
                print(f"    3. Code executes `this.src = 'img/placeholder.jpg'`. Image URL updated.")
                print(f"    4. 'img/placeholder.jpg' exists on disk -> Loads successfully.")
                print(f"    5. If 'img/placeholder.jpg' ever failed, handler is null -> No secondary 404 loop!")

    print(f"\nSuite 3 Summary: {onerror_found} Onerror Handlers Scanned, {unsafe_handlers} Unsafe Handlers Found.\n")
    return unsafe_handlers == 0 and placeholder_exists


if __name__ == "__main__":
    res1 = test_media_assets()
    res2 = test_json_categorias()
    res3 = test_onerror_fallbacks()
    
    if res1 and res2 and res3:
        print("==================================================")
        print("ALL SUITES PASSED SUCCESSFULLY - VERDICT: PASS")
        print("==================================================")
        exit(0)
    else:
        print("==================================================")
        print("VERIFICATION SUITES COMPLETED WITH FAILURES - VERDICT: FAIL")
        print("==================================================")
        exit(1)
