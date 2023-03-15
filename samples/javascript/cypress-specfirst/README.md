# Cypress specificiation-first sample project

This project is using a specification-first workflow. This is the approach you should use in case you want to first create your test cases in TestRail and then map them to your automated tests code. You can see sample tests in the `cypress/e2e/todo_app` folder. 

## How to use the project

Notice that the tests in this project have the test case ID (i.e.: `[C1]`) in the `it()` block, such as:
```javascript
it('[C1] displays two todo items by default', () => {
    // (...)
  })
```
Before executing the script below, you should first replace the test case IDs with valid IDs from your TestRail project and replace the placeholders in `trcli-config.yml` with your TestRail instance details.

From a TestRail CLI perspective, in order to use this approach, we are using the `--case-matcher "name"` option. We also recommend using the `-n` option, so that cases that do not have a match in TestRail are not automaticaclly created, potentially creating duplication.

```sh
# Install TR CLI
pip install trcli

# Install test project
npm install

# Run tests
npx cypress run --reporter junit --reporter-options "mochaFile=reports/junit-[hash].xml"

# Merge reports
junitparser merge --glob "reports/junit-*" "reports/junit-report.xml"

# Upload test results
trcli -n -c "trcli-config.yml" parse_junit -f "reports/junit-report.xml" --case-matcher "name"
```
