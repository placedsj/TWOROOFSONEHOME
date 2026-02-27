
import asyncio
from playwright.async_api import async_playwright, expect

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        print("Navigating to login page...")
        await page.goto("http://localhost:3000/login")

        # Fill in the form
        await page.fill('input#username', 'testuser')
        await page.fill('input#password', 'password123')

        # Click login button
        print("Clicking login button...")
        submit_button = page.locator('button[type="submit"]')
        await submit_button.click()

        # Verify loading state
        print("Checking loading state...")
        # Since the button changes text immediately, we check it
        await expect(submit_button).to_be_disabled()
        # Verify the text content explicitly
        button_text = await submit_button.text_content()
        if "Logging in..." in button_text:
            print("Verified button text: 'Logging in...'")
        else:
            print(f"FAILED: Button text is '{button_text}'")

        # Take screenshot of loading state immediately
        await page.screenshot(path="verification_login_loading.png")
        print("Screenshot saved to verification_login_loading.png")

        # Wait for navigation (1.5s delay simulated in code)
        print("Waiting for navigation...")
        await page.wait_for_timeout(2000)

        # Check URL
        if "/dashboard" in page.url:
            print("Successfully navigated to /dashboard")
        else:
            print(f"Navigation check failed. Current URL: {page.url}")

        await page.screenshot(path="verification_dashboard.png")
        print("Screenshot saved to verification_dashboard.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
