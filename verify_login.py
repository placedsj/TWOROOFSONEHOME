from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to Login
            page.goto("http://localhost:3000/login")
            print("Navigated to /login")

            # Take screenshot of initial state
            page.screenshot(path="verification_login_initial.png")
            print("Initial screenshot taken")

            # Check for elements
            if page.locator("input#username").count() > 0:
                print("Username input found")
            else:
                print("Username input NOT found")

            if page.locator("input#password").count() > 0:
                print("Password input found")
            else:
                print("Password input NOT found")

            # Test empty submission
            page.click("button[type=submit]")
            page.wait_for_timeout(500)
            if page.get_by_text("Username is required").is_visible():
                print("Validation: Empty username check PASSED")
            else:
                print("Validation: Empty username check FAILED")

            # Test invalid username (special chars)
            page.fill("input#username", "user@name")
            page.click("button[type=submit]")
            page.wait_for_timeout(500)
            if page.get_by_text("Username can only contain letters").is_visible():
                print("Validation: Invalid username check PASSED")
            else:
                print("Validation: Invalid username check FAILED")

            # Test short password
            page.fill("input#username", "valid_user")
            page.fill("input#password", "short")
            page.click("button[type=submit]")
            page.wait_for_timeout(500)
            if page.get_by_text("Password must be at least 8 characters").is_visible():
                 print("Validation: Short password check PASSED")
            else:
                 print("Validation: Short password check FAILED")

            # Test valid submission
            page.fill("input#password", "validpassword123")
            page.click("button[type=submit]")

            # Check for loading state
            if page.locator("button[disabled]").is_visible():
                print("Loading state verified")

            # Wait for redirect
            try:
                page.wait_for_url("**/dashboard", timeout=5000)
                print("Redirect to /dashboard PASSED")
                page.screenshot(path="verification_dashboard.png")
            except Exception as e:
                print(f"Redirect failed or timed out: {e}")

        except Exception as e:
            print(f"An error occurred: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
