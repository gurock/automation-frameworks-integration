# Original source: https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/docker
# Added Python installation

FROM ubuntu:20.04
RUN DEBIAN_FRONTEND=noninteractive apt-get update
RUN DEBIAN_FRONTEND=noninteractive apt-get upgrade -y

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
    apt-transport-https \
    apt-utils \
    ca-certificates \
    curl \
    git \
    iputils-ping \
    jq \
    lsb-release \
    software-properties-common

RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

# Can be 'linux-x64', 'linux-arm64', 'linux-arm', 'rhel.6-x64'.
ENV TARGETARCH=linux-x64

# Custom for Python 3.10 installation
RUN add-apt-repository ppa:deadsnakes/ppa && \
    apt install -y python3.10-dev python3.10-venv

RUN mkdir azp && cd /azp && \
  mkdir _work && cd _work && \
  mkdir _tool && cd _tool && \
  mkdir Python && cd Python && \
  mkdir "3.10.12" && cd "3.10.12" && \
  python3.10 -m venv x64 && \
  touch x64.complete

WORKDIR /azp

COPY ./start.sh .
RUN chmod +x start.sh

ENTRYPOINT [ "./start.sh" ]
