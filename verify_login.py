from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000/login")

        # Take initial screenshot to verify inputs
        page.screenshot(path="login_initial.png")

        # Trigger login to see the loading state
        page.evaluate("document.querySelector('button[type=submit]').click()")

        # Wait a tiny bit for state to update but not long enough to redirect
        time.sleep(0.1)

        # Take screenshot of the loading state
        page.screenshot(path="login_loading.png")

        browser.close()

if __name__ == "__main__":
    run()
