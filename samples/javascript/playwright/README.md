# Playwright sample project

## How to use the project

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh
# Install TR CLI
pip install trcli

# Install test project
npm install

# Run tests
npx playwright test

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "reports/junit-report.xml"
```