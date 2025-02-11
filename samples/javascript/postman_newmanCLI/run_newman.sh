#!/bin/bash
clear
bold=$(tput bold)
echo "${bold}-------------------------------------------"
echo "${bold}--  Postman TestRail Sample Run Script   --"
echo "${bold}-------------------------------------------"
echo

echo "${bold}...verify TRCLI is installed"
echo

trcli
echo

echo "${bold}...install the Newman Postman project, resolve dependencies"
echo

npm install -g newman
echo

echo "${bold}...executing Newman API Postman tests"
echo
newman run API_Test_Demo.postman_collection.json -r cli,junit --reporter-junit-export ./reports/newman_junit.xml

echo

echo "${bold}...executing TestRail CLI, uploading results in new test run"
echo

trcli -y -c "trcli-config.yml" parse_junit -f "./reports/newman_junit.xml" --title "Automation Demo - Postman API Tests"
echo

echo "${bold}...execution complete"
echo

