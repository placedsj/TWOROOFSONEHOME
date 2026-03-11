from playwright.sync_api import sync_playwright

def test_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000/binder")

        page.wait_for_selector("text=DIRECTIVE SYSTEM: ONLINE", timeout=10000)

        # Open directive to test pagination dots
        open_directive_button = page.locator("button", has_text="Open Directive")
        open_directive_button.scroll_into_view_if_needed()
        open_directive_button.click()

        # Wait for reader mode
        page.wait_for_selector("button[aria-label='Go to page 1']")
        page.wait_for_timeout(1000)

        page.screenshot(path="screenshot.png")
        browser.close()

if __name__ == "__main__":
    test_ui()
