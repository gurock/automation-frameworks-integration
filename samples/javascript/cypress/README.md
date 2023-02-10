# Cypress sample project

## How to use the project

To begin, replace the placeholders in `trcli-config.yml` with your TestRail instance details.

The tests in this project exist under the path `cypress/e2e` and there are two sets of similar tests (`code_first` and `spec_first`), provisioned for specific automation workflows. In the sections below you can find information about how to use each workflow, so that you can decide which better suits your test automation process.


## 1. Code-first
If you want your test cases to be automatically created in TestRail and not worry about mapping them manually, you don't need to do any modifications to the way you usually write your automated test cases. You can see sample tests in the `cypress/e2e/code_first` folder. You will want to use the `-y` option with this approach to allow all test entities to be automatically created.

Executing the script below will:
1. Install all dependencies 
2. Run the tests in the `cypress/e2e/code_first` folder
3. Merge the generated reports
4. Create the test cases in TestRail and submit their results

```sh
# Install TR CLI
pip install trcli

# Install test project
npm install

# Run tests
npx cypress run --reporter junit --reporter-options "mochaFile=reports/codefirst-[hash].xml" --spec "cypress/e2e/code_first/*"

# Upload test results
junitparser merge --glob "reports/codefirst-*" "reports/junit-report-codefirst.xml"
trcli -y -c "trcli-config.yml" parse_junit -f "reports/junit-report-codefirst.xml"
```

## 2. Specification-first
In case you want to first create your test cases in TestRail and then map them to your automated tests code, you can see the tests in the `cypress/e2e/spec_first` folder. Notice that these tests have the test case ID (i.e.: `[C1]`) in the `it()` block, such as:
```javascript
it('[C1] displays two todo items by default', () => {
    // (...)
  })
```
To try out this project, you should first replace the test case IDs with valid IDs from your TestRail project. From a TestRail CLI perspective, in order to use this approach, all you need to do is add the `--case-matcher "name"` option. We also recommend using the `-n` option, so that cases that do not have a match in TestRail are not automaticaclly created, potentially creating duplication.

Executing the script below will:
1. Install all dependencies 
2. Run the tests in the `cypress/e2e/spec_first` folder
3. Merge the generated reports
4. Submit their results to the respective test cases in TestRail

```sh
# Install TR CLI
pip install trcli

# Install test project
npm install

# Run tests
npx cypress run --reporter junit --reporter-options "mochaFile=reports/specfirst-[hash].xml" --spec "cypress/e2e/spec_first/*"

# Upload test results
junitparser merge --glob "reports/specfirst-*" "reports/junit-report-specfirst.xml"
trcli -n -c "trcli-config.yml" parse_junit -f "reports/junit-report-specfirst.xml" --case-matcher "name"
```
