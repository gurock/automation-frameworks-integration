from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webdriver import WebDriver


class TestsHomepage:

    @staticmethod
    def test_header_links(browser_driver: WebDriver, record_property):
        """
        Checks headers links
        """
        record_property("testrail_result_comment", "1. Check Platform link")
        assert browser_driver.find_element(By.XPATH, "//*[@href='/platform/']").is_displayed()

        record_property("testrail_result_comment", "2. Check Enterprise link")
        assert browser_driver.find_element(By.XPATH, "//*[@href='/enterprise/']").is_displayed()

        record_property("testrail_result_comment", "3. Check Pricing link")
        assert browser_driver.find_element(By.XPATH, "//*[@href='/pricing/']").is_displayed()

    @staticmethod
    def test_action_links(browser_driver: WebDriver, record_property):
        """
        Checks actions links for trial and demo
        """
        record_property("testrail_result_comment", "1. Check Demo link")
        assert browser_driver.find_element(By.XPATH, "(//*[contains(@href,'webinar/register')])[1]").is_displayed()

        record_property("testrail_result_comment", "2. Check Trial link")
        assert browser_driver.find_element(By.XPATH, "//*[@href='/get_trial_invalid_link/']").is_displayed()
