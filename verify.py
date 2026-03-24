from playwright.sync_api import sync_playwright

def verify_feature(page):
    page.set_viewport_size({"width": 1280, "height": 800})

    # 1. Verify domains icons
    print("Navigating to Digital Binder...")
    page.goto("http://localhost:3000/binder")
    page.wait_for_timeout(2000)

    print("Testing domain buttons keyboard navigation...")
    page.keyboard.press('Tab')
    page.wait_for_timeout(500)
    page.keyboard.press('Tab')
    page.wait_for_timeout(500)
    page.keyboard.press('Tab')
    page.wait_for_timeout(500)
    page.keyboard.press('Tab')
    page.wait_for_timeout(500)

    print("Taking screenshot of domains icons...")
    page.screenshot(path="/app/verify_domains.png")

    # 2. Verify reader close button
    print("Opening reader...")
    page.get_by_text("Open Directive").click()
    page.wait_for_timeout(1000)

    print("Testing reader close button keyboard navigation...")
    # Need to tab into the reader modal
    for _ in range(5):
        page.keyboard.press('Tab')
        page.wait_for_timeout(200)

    print("Taking screenshot of reader close button...")
    page.screenshot(path="/app/verify_reader.png")

    print("Closing reader...")
    page.get_by_role("button", name="Close reader").click()
    page.wait_for_timeout(1000)

    # 3. Verify glossary close button
    print("Opening glossary...")
    page.get_by_text("Lexicon").click()
    page.wait_for_timeout(1000)

    print("Testing glossary close button keyboard navigation...")
    for _ in range(3):
        page.keyboard.press('Tab')
        page.wait_for_timeout(200)

    print("Taking screenshot of glossary close button...")
    page.screenshot(path="/app/verify_glossary.png")

    print("Verification complete.")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="/app/video")
        page = context.new_page()
        try:
            verify_feature(page)
        finally:
            context.close()
            browser.close()
