from playwright.sync_api import sync_playwright
import time

def verify_login():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to login page
        print("Navigating to login page...")
        try:
            page.goto("http://localhost:3000/login", timeout=10000)
        except Exception as e:
            print(f"Failed to load page: {e}")
            return

        # Check for inputs with aria-labels
        print("Checking for inputs with aria-labels...")
        try:
            username_input = page.get_by_label("Username")
            password_input = page.get_by_label("Password")

            if username_input.is_visible() and password_input.is_visible():
                print("Inputs with aria-labels found.")
            else:
                print("Inputs with aria-labels NOT found.")
        except Exception as e:
            print(f"Error checking inputs: {e}")

        # Take initial screenshot
        page.screenshot(path="verification/login_initial.png")

        # Fill inputs
        username_input.fill("testuser")
        password_input.fill("password123")

        # Click login button
        login_button = page.get_by_role("button", name="Log In")
        print("Clicking login button...")
        login_button.click()

        # Verify loading state
        # The button text should change to "Logging in..."
        # We need to catch it quickly as it lasts 1.5s
        try:
            # wait for the text "Logging in..." to appear inside the button
            page.wait_for_selector("button:has-text('Logging in...')", timeout=2000)
            print("Loading state verified.")
            page.screenshot(path="verification/login_loading.png")
        except Exception as e:
            print(f"Loading state not verified: {e}")

        # Wait for redirection to dashboard
        print("Waiting for redirection...")
        try:
            page.wait_for_url("**/dashboard", timeout=5000)
            print("Redirected to dashboard.")
            page.screenshot(path="verification/login_success.png")
        except Exception as e:
            print(f"Redirection failed: {e}")

        browser.close()

if __name__ == "__main__":
    verify_login()
