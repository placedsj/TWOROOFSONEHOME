from playwright.sync_api import sync_playwright

def verify_app():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to Home
        print("Navigating to Home...")
        page.goto("http://localhost:3000/")
        page.wait_for_selector("text=The Harper Baseline", timeout=10000)
        page.screenshot(path="verification_home.png")
        print("Home screenshot taken.")

        # Navigate to Login
        print("Navigating to Login...")
        page.goto("http://localhost:3000/login")
        # Wait for the login form which I fixed
        page.wait_for_selector("form", timeout=10000)
        page.wait_for_selector("input#username", timeout=10000)
        page.screenshot(path="verification_login.png")
        print("Login screenshot taken.")

        # Navigate to DigitalBinder (Lazy Loaded)
        print("Navigating to DigitalBinder...")
        page.goto("http://localhost:3000/binder")
        # Wait for something unique in DigitalBinder
        page.wait_for_selector("text=The Harper Baseline", timeout=10000) # Header is same
        # Wait for "Core Agreement Modules" or "Only the truth"
        page.wait_for_selector("text=Only the truth", timeout=20000) # Giving more time for lazy load
        page.screenshot(path="verification_binder.png")
        print("DigitalBinder screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_app()
