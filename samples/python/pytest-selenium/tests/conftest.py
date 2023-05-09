import json
from pathlib import Path
from uuid import uuid4

import pytest
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager


@pytest.fixture
def browser_driver(request, record_property):
    """Initializes webdriver and performs teardown actions"""
    driver = setup_driver()
    yield driver
    save_failure_artifacts(driver, request, record_property)
    driver.close()


def setup_driver():
    """Creates webdriver for Chrome and opens the TestRail website"""
    chrome_options = webdriver.ChromeOptions()
    chrome_options.add_argument("--no-sandbox")
    driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=chrome_options)
    driver.implicitly_wait(3)
    driver.set_page_load_timeout(10)
    driver.get('https://www.testrail.com/')
    driver.maximize_window()
    return driver


def save_failure_artifacts(driver, request, record_property):
    """Saves screenshot and browser logs for failed tests"""
    if request.node.rep_setup.failed or request.node.rep_call.failed:
        try:
            failure_id = uuid4()
            # Create reports folder if not exists
            reports_folder = Path("reports")
            if not reports_folder.is_dir():
                reports_folder.mkdir()
            # Save screenshot
            screenshot_path = str(reports_folder / f"{failure_id}_screenshot.png")
            driver.save_screenshot(screenshot_path)
            record_property("testrail_attachment", screenshot_path)
            # Save browser logs
            browser_logs_path = reports_folder / f"{failure_id}_browser_logs.json"
            with browser_logs_path.open("x") as file:
                file.write(json.dumps(driver.get_log("browser"), indent=4))
            record_property("testrail_attachment", browser_logs_path)
        except Exception as ex:
            print(ex)


@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    """Hook to allow fetching test execution status in fixtures for selective teardown purposes"""
    # execute all other hooks to obtain the report object
    outcome = yield
    rep = outcome.get_result()
    # set a report attribute for each phase of a call, which can be "setup", "call", "teardown"
    setattr(item, "rep_" + rep.when, rep)
