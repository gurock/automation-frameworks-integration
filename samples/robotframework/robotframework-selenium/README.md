# Robot Framework sample project

## How to use the project

- Replace the placeholders in `trcli-config.yml` with your TestRail instance details
- Execute the commands on the script below

```sh
# Install TR CLI
pip install trcli

# Install test project
pip install -r requirements.txt

# Run tests
robot -d reports "./tests"

# Upload test results
trcli -y -c "trcli-config.yml" parse_robot -f "reports/output.xml"
```
