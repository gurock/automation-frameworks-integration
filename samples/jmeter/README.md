# JMeter TestRail integration sample project

## Pre-requisites for running the tests in the project

You need to install the following on your local machine:
- JMeter 
- JUnit Pluggin
- Python3 

## How to upload the test results to TestRail from your local machine

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh

# Install the TestRail CLI
pip install trcli

# Run Tests
jmeter -n -t ././././jmeter_performance_test.jmx

# Upload JMeter Test Results to TestRail
trcli -y -c "trcli-config.yml" parse_junit -f "sample_result.xml" --title "JMeter Demo"

```
