# Cypress sample project

## How to use the project

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh
# Install TR CLI
pip install trcli

# Install test project
npm install

# Run tests
.\node_modules\.bin\cypress run --reporter junit --reporter-options "mochaFile=reports/TEST-[hash].xml"
junitparser merge --glob "reports/TEST-*" "reports/junit-report.xml"

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "reports/junit-report.xml"
```