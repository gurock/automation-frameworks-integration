# Cypress with saucectl sample project

## How to use the project

### 1. Set TestRail instance details
Replace the placeholders in `trcli-config.yml` with your TestRail instance details. 

### 2. Set SauceLabs credentials
You also need to set your SauceLabs credentials by running the command `saucectl configure` 
or by setting the `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` environment variables.

For more information on how to use the `saucectl` and how to run a cypress project using it, please see the links below:
- [saucectl - Using saucectl](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl)
- [saucectl - Cypress Quickstart](https://docs.saucelabs.com/web-apps/automated-testing/cypress/quickstart)

### 3. Run the execution script
```sh
# Install CLIs
npm install -g saucectl
pip install trcli

# Execute automated tests project through saucectl
saucectl run

# Send test results to TestRail
trcli -y -c "trcli-config.yml" parse_junit --special-parser "saucectl" -f "junit-output-saucectl.xml"
```
