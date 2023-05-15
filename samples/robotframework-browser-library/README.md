# Robot Framework browser library sample project

## Pre-requisites for running the tests in the project

You need to install the following on your local machine:
- Node.js 
- Python3

## How to use the project

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh
# Install Robot Framework Browser Library
pip install robotframework-browser

# Initialize the Browser library:
rfbrowser init

# Install TR CLI
pip install trcli

# Run tests
robot -d reports -x junit-report.xml "./tests"

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "reports/junit-report.xml"
```