# Jenkins docker images repository

### Building and running Jenkins with Python and Chrome

1. Execute the following commands on your terminal
```shell
docker build -t jenkins-python-chrome:local -f dockerfile_jenkins_python_chrome .
docker run -p 8080:8080 -p 50000:50000 jenkins-python-chrome:local
```

2. Copy the admin key from the logs on the terminal
3. Jenkins should be running on http://localhost:8080
