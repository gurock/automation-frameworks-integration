import time
from asyncio import wait_for

from playwright.sync_api import Page
from .base_page import BasePage


class HomePage(BasePage):

    def __init__(self, page: Page):
        super().__init__(page)

        # Locators
        self.get_started_link = page.locator("a.getStarted_Sjon")
        self.heading = page.locator("header > h1")
        self.open_search_input_button = page.locator("[aria-label= 'Search (Command+K)']")
        self.search_modal = page.locator("div.DocSearch-Dropdown-Container")
        self.search_input_field = page.locator("#docsearch-input")
        self.results_list = page.locator('div.DocSearch-Dropdown-Container > section:nth-of-type(1) ul')

    def click_started_link(self):
        self.get_started_link.click()

    def get_header_text(self):
        return self.heading.inner_text()

    def search_for_term(self, term: str):
        self.open_search_input_button.click()
        self.search_input_field.click()
        self.search_input_field.fill(term)
        time.sleep(1)
        self.search_input_field.press("Enter")
