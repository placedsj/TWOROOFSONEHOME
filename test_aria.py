import time
from playwright.sync_api import sync_playwright

def run_cuj(page):
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)

    # Need to click through to binder
    page.get_by_role("button", name="Access Digital Binder").click()
    page.wait_for_timeout(1000)

    # 1. Open Lexicon (Glossary) and verify close button
    page.get_by_role("button", name="Lexicon").click()
    page.wait_for_timeout(1000)
    glossary_close = page.locator("button[aria-label='Close glossary']")

    # Focus the button using keyboard to show the focus ring
    page.keyboard.press('Tab')
    page.wait_for_timeout(500)
    page.keyboard.press('Tab')
    page.wait_for_timeout(500)

    page.screenshot(path="verify_glossary_close.png")
    page.wait_for_timeout(500)
    glossary_close.click()
    page.wait_for_timeout(1000)

    # 2. Open Directive (Reader) and verify close button
    page.get_by_role("button", name="Open Directive").click()
    page.wait_for_timeout(1000)

    # Click the domain buttons to show they have tooltips or are interactable with aria labels
    # We can't see aria labels visually, but we can verify focus rings
    domain_button = page.locator("button[aria-label='Educational']")

    # Focus the domain button using keyboard
    for _ in range(7): # Tab a few times to get to the domain buttons
        page.keyboard.press('Tab')
        page.wait_for_timeout(100)

    page.screenshot(path="verify_domain_buttons.png")
    page.wait_for_timeout(500)

    reader_close = page.locator("button[aria-label='Close reader']")
    reader_close.click()
    page.wait_for_timeout(1000)

    # Take a final screenshot
    page.screenshot(path="verify_final.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="error.png")
        finally:
            context.close()
            browser.close()
