from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # 1. Visit Home
        print("Visiting Home...")
        page.goto("http://localhost:3000/")
        page.screenshot(path="home.png")
        print("Home screenshot taken.")

        # 2. Visit Login and Test Form
        print("Visiting Login...")
        page.goto("http://localhost:3000/login")
        page.wait_for_selector("h1:has-text('Login')")
        page.screenshot(path="login.png")
        print("Login screenshot taken.")

        # Test Login
        print("Testing Login Form...")
        page.fill("#username", "adminuser")
        page.fill("#password", "password123")
        page.click("button[type='submit']")

        # Should show loading state, then redirect
        # We might catch the loading spinner if we are fast, but difficult in script.
        # Just wait for redirect to dashboard
        try:
            page.wait_for_url("**/dashboard", timeout=5000)
            print("Redirected to Dashboard successfully.")
            page.screenshot(path="dashboard.png")
        except:
            print("Failed to redirect to Dashboard.")
            page.screenshot(path="login_failed.png")

        browser.close()

if __name__ == "__main__":
    run()
