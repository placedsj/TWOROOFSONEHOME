from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000/")
    page.wait_for_timeout(2000)

    # Click on "Access Digital Binder" to get to the binder page
    try:
        page.get_by_role("button", name="Access Digital Binder").click()
        page.wait_for_timeout(2000)
    except Exception as e:
        print("Could not click 'Access Digital Binder', proceeding anyway as we might be on the right page")

    # Try opening the "Open Directive" or "Read Agreement" modal which contains close buttons
    try:
        page.get_by_role("button", name="Open Directive").click()
        page.wait_for_timeout(1000)
    except Exception as e:
        try:
            page.get_by_text("Open Directive").click()
            page.wait_for_timeout(1000)
        except Exception as e2:
             try:
                 page.get_by_role("button", name="Read Agreement").click()
                 page.wait_for_timeout(1000)
             except:
                 pass

    # Verify that close button has focus styles if we tab to it
    page.keyboard.press("Tab")
    page.wait_for_timeout(500)

    # Take screenshot at the key moment showing the focus ring on close button if possible
    page.screenshot(path="/app/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/app/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()  # MUST close context to save the video
            browser.close()
