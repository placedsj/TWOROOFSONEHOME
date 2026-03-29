from playwright.sync_api import sync_playwright
import time

def verify_clock(page):
    page.goto("http://localhost:3000/")
    # Wait for the main UI to render
    page.wait_for_timeout(2000)

    # Click Access Digital Binder
    try:
        page.get_by_text("Access Digital Binder").click()
    except Exception as e:
        print("Couldn't click access button:", e)

    page.wait_for_timeout(2000)

    # Take a screenshot
    page.screenshot(path="/app/verification/verify_clock.png", full_page=True)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_clock(page)
        except Exception as e:
            print("Error:", e)
            page.screenshot(path="/app/verification/error.png", full_page=True)
        finally:
            browser.close()
