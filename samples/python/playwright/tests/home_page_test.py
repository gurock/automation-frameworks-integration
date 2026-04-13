import pytest

from pages.home_page import HomePage

URL = "https://playwright.dev/"


@pytest.fixture(scope="function", autouse=True)
def before_each_after_each(homepage: HomePage):
    # Go to the starting url before each test.
    homepage.navigate(URL)
    yield

    print("after the test runs")


def test_get_started_link(homepage: HomePage):
    # Click the get started link.
    homepage.get_started_link.click()
    homepage.wait_for_load()

    # Expects page to have a heading with the name of Installation.
    assert (homepage.get_header_text() == "Installation")


@pytest.mark.parametrize(
    "search_term, header_text",
    [
        ("writing", "Writing tests"),
        ("parameter", "Parameterize tests"),
    ],
)
def test_search_for_term(homepage: HomePage, search_term: str, header_text: str):
    homepage.search_for_term(search_term)
    assert (homepage.get_header_text() == header_text)
