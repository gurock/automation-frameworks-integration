# NUnit sample project

## How to use the project

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh
# Install TR CLI
pip install trcli

# Install test project
dotnet restore
dotnet build

# Run tests
./NuGet/nunit.consolerunner/3.15.0/tools/nunit3-console SimpleTestProject/bin/Debug/net6.0/SimpleTestProject.dll --trace off --result "reports/junit-report.xml;transform=SimpleTestProject/nunit3-junit.xslt"

# Upload test results
trcli -y -c "trcli-config.yml" parse_junit -f "reports/junit-report.xml"
```
