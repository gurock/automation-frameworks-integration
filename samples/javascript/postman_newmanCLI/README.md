# Postman TestRail integration sample project

## Pre-requisites for running the tests in the project

You need to install the following on your local machine:
- Postman
- Python3 

## How to upload the test results to TestRail from your local machine

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh

# Install the Newman CLI
npm install -g newman

# Install the TestRail CLI
pip install trcli

# Run Tests
newman run API_Test_Demo.postman_collection.json -r cli,junit --reporter-junit-export ./reports/newman_junit.xml

# Upload Postman Test Results to TestRail
trcli -y -c "trcli-config.yml" parse_junit -f "./reports/newman_junit.xml" --title "Automation Demo - Postman API Tests"

```
