from playwright.sync_api import sync_playwright

def run_cuj(page):
    # Navigate to app
    page.goto("http://localhost:3000/")
    page.wait_for_timeout(1000)
    page.get_by_text("Access Digital Binder").click()
    page.wait_for_timeout(1000)

    # Open the Reader
    page.get_by_role("button", name="Open Directive").click()
    page.wait_for_timeout(1000)

    # Focus the Close Modal button to show the ring
    page.keyboard.press('Tab')
    page.wait_for_timeout(500)

    page.screenshot(path="/app/verification/screenshots/reader_open.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    import os
    os.makedirs("/app/verification/screenshots", exist_ok=True)
    os.makedirs("/app/verification/videos", exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/app/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()