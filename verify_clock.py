import sys
from playwright.sync_api import sync_playwright, expect

port = sys.argv[1] if len(sys.argv) > 1 else "3000"

def verify_feature(page):
    page.goto(f"http://localhost:{port}/binder")
    page.wait_for_timeout(1000)

    # Verify the LiveClock component is rendered
    expect(page.get_by_text("THE HARPER BASELINE PROTOCOL")).to_be_visible()

    # We wait a bit to see the clock tick (though we only take a static screenshot)
    page.wait_for_timeout(2000)

    # Take screenshot of the header area where the clock is
    page.screenshot(path="verify_clock.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(record_video_dir="video")
        page = context.new_page()
        try:
            verify_feature(page)
        finally:
            context.close()
            browser.close()
