from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Verify Login Page
    print("Navigating to Login...")
    try:
        page.goto("http://localhost:3000/login")
        page.wait_for_selector("text=Login", timeout=5000)
        page.screenshot(path="verification_login.png")
        print("Login page verified.")
    except Exception as e:
        print(f"Login page verification failed: {e}")

    # Verify Digital Binder
    print("Navigating to Digital Binder...")
    try:
        page.goto("http://localhost:3000/binder")
        page.wait_for_selector("text=Harper Baseline", timeout=5000)

        # Open Reader Mode
        print("Opening Reader Mode...")
        page.click("text=Open Directive")
        page.wait_for_selector("text=Parenting Directive", timeout=5000)

        # Verify Buttons and Hints (Hover over Continue)
        print("Verifying Reader Mode Hover...")
        continue_btn = page.locator("button:has-text('Continue')")
        continue_btn.hover()
        page.wait_for_timeout(500) # Wait for transition
        page.screenshot(path="verification_reader_continue.png")

        # Test Keyboard Navigation (ArrowRight)
        print("Testing Keyboard Navigation...")
        page.keyboard.press("ArrowRight")
        page.wait_for_timeout(500)

        # Check if new content is visible
        # Page 1 title: "The Harper Baseline"
        content = page.content()
        if "The Harper Baseline" in content:
            print("Navigation successful: Moved to Page 1")
        else:
            print("Navigation failed: Did not move to Page 1")

        page.screenshot(path="verification_reader_navigated.png")
    except Exception as e:
        print(f"Digital Binder verification failed: {e}")

    browser.close()

if __name__ == "__main__":
    with sync_playwright() as playwright:
        run(playwright)
