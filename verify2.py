from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000/")
    page.wait_for_timeout(2000)

    try:
        page.get_by_role("button", name="Access Digital Binder").click()
        page.wait_for_timeout(2000)
    except Exception as e:
        pass

    # Try opening the "Open Directive" modal
    try:
        page.get_by_role("button", name="Open Directive").click()
        page.wait_for_timeout(1000)
    except Exception as e:
        pass

    # Try tabbing a few times to get to the Close button
    page.keyboard.press("Tab")
    page.wait_for_timeout(200)
    page.keyboard.press("Tab")
    page.wait_for_timeout(200)
    page.keyboard.press("Tab")
    page.wait_for_timeout(200)
    page.keyboard.press("Tab")
    page.wait_for_timeout(200)

    # Take screenshot at the key moment showing the focus ring on close button if possible
    page.screenshot(path="/app/verification2.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/app/videos2"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()
