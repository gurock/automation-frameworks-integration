# Azure Pipelines agents docker images repository

### Building and running an Azure DevOps pipelines agent with Python 3.10.12

> Scripts are modified versions of the original sources in the [Azure DevOps documentation](https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/docker)

1. Execute the following commands on your terminal
```shell
docker build -t azureagent:latest .
docker run -e AZP_URL="<AZURE_URL>" -e AZP_TOKEN="<TOKEN>" -e AZP_AGENT_NAME="SelfHostedLinux" azureagent:latest
```
