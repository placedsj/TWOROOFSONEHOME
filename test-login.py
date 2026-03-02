from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    print("Navigating to local dev server /login...")
    page.goto("http://localhost:3000/login", wait_until="networkidle")

    print("Verifying accessible labels...")
    username_label = page.locator("label[for='username']")
    password_label = page.locator("label[for='password']")

    if username_label.is_visible() and password_label.is_visible():
        print("Labels found and correctly associated via htmlFor.")
    else:
        print("Error: Labels missing or incorrectly associated.")
        exit(1)

    print("Checking HTML5 validation on submit...")
    submit_button = page.get_by_role("button", name="Log In")
    submit_button.click()

    is_loading = page.locator("button:has-text('Logging in...')").is_visible()
    if is_loading:
        print("Error: Form submitted despite empty required fields! HTML5 validation failed.")
        exit(1)
    else:
        print("Success: Form submission prevented by HTML5 validation.")

    print("Filling form and verifying loading state...")
    page.locator("#username").fill("admin")
    page.locator("#password").fill("password")

    submit_button.click()

    if page.locator("button:has-text('Logging in...')").is_visible():
        print("Success: Loading state active.")
    else:
        print("Error: Loading state not shown.")
        exit(1)

    print("Waiting for redirection...")
    page.wait_for_url("http://localhost:3000/dashboard")
    print("Success: Redirected to dashboard.")

    browser.close()
