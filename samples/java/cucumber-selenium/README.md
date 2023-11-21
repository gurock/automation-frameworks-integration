# Cucumber Selenium Sample Project

## Pre-requisites for running the tests in the project

You need to install the following on your local machine:
- Java (JDK 8 or higher)
- Maven
- Python3 
- Chrome browser

## How to upload the test results to TestRail from your local machine

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh
# Install TR CLI
pip install trcli

# Install test project
mvn clean compile

# Run tests
mvn clean compile test

# Upload test results to Testrail
trcli -y -c "trcli-config.yml" parse_junit -f "./target/cucumber-results.xml"

```