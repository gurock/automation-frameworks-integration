from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webdriver import WebDriver


class TestsFooter:

    @staticmethod
    def test_social_links(browser_driver: WebDriver):
        assert browser_driver.find_element(By.XPATH, "//*[@href='https://www.linkedin.com/company/testrail/']").is_displayed()
