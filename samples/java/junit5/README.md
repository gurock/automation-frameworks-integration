# JUnit5 sample project

## How to use the project

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh
# Install TR CLI
pip install trcli

# Install test project
mvn clean compile

# Run tests
mvn clean compile surefire-report:report site

# Merge reports
junitparser merge --glob "./target/surefire-reports/TEST-*"  "./target/surefire-reports/junit-report.xml"

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "./target/surefire-reports/junit-report.xml"

```