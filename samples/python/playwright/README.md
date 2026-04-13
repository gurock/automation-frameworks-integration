# Playwright Python Project

A test automation framework built with Python, Playwright, and Pytest.

## Prerequisites

- Python 3.9+
- pip

## Installation

1. Create and activate a virtual environment:
   python -m venv .venv
   source .venv/bin/activate        # Mac/Linux
   .venv\Scripts\activate           # Windows

2. Install dependencies:
   pip install -r requirements.txt

3. Install Playwright browsers:
   playwright install

## Running Tests

Run all tests:
pytest

Run a specific test file:
pytest tests/home_page_test.py

Run with a specific browser:
pytest --browser firefox

## Reports

JUnit XML reports are automatically generated at:
tests/reports/junit-report.xml
