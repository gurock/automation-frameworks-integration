import pytest
from pages.home_page import HomePage

# conftest.py
import xml.etree.ElementTree as ET
import os

def pytest_sessionfinish(session, exitstatus):
    xml_path = session.config.getoption("--junit-xml", default=None)
    if not xml_path or not os.path.exists(xml_path):
        return

    test_files = set(item.fspath.purebasename for item in session.items)
    if len(test_files) != 1:
        return

    suite_name = next(iter(test_files))

    # Parse and update the XML file directly
    tree = ET.parse(xml_path)
    root = tree.getroot()

    # Handle both <testsuites><testsuite> and bare <testsuite> structures
    for testsuite in root.iter("testsuite"):
        testsuite.set("name", suite_name)

    tree.write(xml_path, encoding="utf-8", xml_declaration=True)

@pytest.fixture
def homepage(page):
    return HomePage(page)

