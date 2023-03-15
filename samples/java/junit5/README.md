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
mvn clean compile test

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "./target/TEST-junit-jupiter.xml"

```

In case you want to run the project using docker instead, you can use the script below.
```sh
# Install TR CLI
pip install trcli

# Execute tests project in docker
docker run -it -v ${PWD}:/usr/src/junit5 -w "/usr/src/junit5" maven:3.6.3-jdk-11-openj9 mvn clean compile test

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "./target/TEST-junit-jupiter.xml"

```