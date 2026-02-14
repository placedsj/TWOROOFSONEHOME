from playwright.sync_api import sync_playwright
import time

def verify_binder_clock():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:3000/binder")

        # Wait for the page to load
        page.wait_for_selector('text=Harper Baseline')

        # Wait a bit for the clock to tick (though static screenshot won't show ticking, it shows it exists)
        time.sleep(2)

        # Take a screenshot of the whole page
        page.screenshot(path="verification_clock.png")
        browser.close()

if __name__ == "__main__":
    verify_binder_clock()
