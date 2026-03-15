import sys
import time
from playwright.sync_api import sync_playwright

port = sys.argv[1]

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto(f"http://localhost:{port}/login")
    page.evaluate("document.querySelector('button').click()")
    time.sleep(0.2)
    page.screenshot(path="login_loading.png")
    browser.close()