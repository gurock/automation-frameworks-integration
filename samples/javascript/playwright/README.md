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
trcli -y -c "trcli-config.yml" parse_junit -f "test-results/junit-report.xml"
```

## How to use the project with Azure Pipelines

- Substitute the placeholders within the `azure-pipelines.yml` file with the specific information related to your TestRail instance and credentials.
- Establish a connection between the project and Azure DevOps, and initiate the pipeline.
- Azure DevOps will automatically detect the `azure-pipelines.yml`
- During the pipeline execution, Playwright tests will be conducted, and the results will be uploaded to TestRail.