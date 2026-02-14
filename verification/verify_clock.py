from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000/binder", timeout=10000)

            # Wait for the clock to be visible.
            # The clock is in a div with font-mono and contains a date-like string
            # We can select by class .font-mono inside the header
            page.wait_for_selector(".font-mono", timeout=5000)

            # Wait a bit to ensure rendering
            time.sleep(2)

            # Take screenshot
            page.screenshot(path="verification/clock.png")
            print("Screenshot taken")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
