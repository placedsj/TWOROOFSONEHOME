from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    try:
        # Navigate to Home
        print("Navigating to Home...")
        page.goto("http://localhost:3000/")
        page.wait_for_selector("text=The Harper Baseline")
        print("Home loaded.")

        # Take screenshot of Home
        page.screenshot(path="verification/home.png")

        # Navigate to Binder
        print("Navigating to Digital Binder...")
        # The button says "Access Digital Binder"
        page.click("text=Access Digital Binder")

        # Wait for Binder to load (lazy loading might take a split second)
        # Look for "Harper Baseline" header or something specific to Binder
        page.wait_for_selector("text=Agreement Modules")
        print("Digital Binder loaded.")

        # Take screenshot of Binder
        page.screenshot(path="verification/binder.png")

        # Navigate to Login
        print("Navigating to Login...")
        page.goto("http://localhost:3000/login")
        page.wait_for_selector("text=Login")
        print("Login loaded.")

        page.screenshot(path="verification/login.png")

    except Exception as e:
        print(f"Error: {e}")
        # Take screenshot on error if possible
        try:
            page.screenshot(path="verification/error.png")
        except:
            pass
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
