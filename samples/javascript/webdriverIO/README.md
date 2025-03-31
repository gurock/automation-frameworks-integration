# Webdriver IO code-first sample project

This project is using a [code-first workflow](https://support.testrail.com/hc/en-us/articles/12609674354068-Code-first-workflow). This is the approach you should use if you want your test cases to be automatically created in TestRail and not worry about mapping them manually. 
Using this approach, you don't need to do any modifications to the way you usually write your automated test cases. 

## How to use the project

Before executing the script, replace the placeholders in `trcli-config.yml` with your TestRail instance details.

Notice the `-y` option on the script below. This will allow all test entities to be automatically created.

```sh
# Install TR CLI
pip install trcli

# Install the project dependencies
npm install

# Run the tests
npx wdio run wdio.conf.js

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "results/test-results.xml" --title "Automation Example - WebdriverIO"
```
