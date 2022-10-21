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
mvn mvn clean compile test

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "./target/TEST-junit-jupiter.xml"

```