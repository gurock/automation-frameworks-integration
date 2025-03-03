#!/bin/bash
clear
bold=$(tput bold)
echo "${bold}----------------------------------------------"
echo "${bold}--------- K6 TestRail Sample Project ---------"
echo "${bold}----------------------------------------------"
echo

echo "${bold}...verify TRCLI is installed"
echo

trcli
echo

echo "${bold}...install k6 and k6-junit library"
echo

npm install -g k6
npm install -g k6-to-junit
echo

echo "${bold}...execute k6 load test"
echo

k6 run test_k6.js | k6-to-junit ./reports/junit.xml

echo "${bold}...executing TestRail CLI, uploading results in new test run"
echo

trcli -y -c "trcli-config.yml" parse_junit -f "./reports/junit.xml" --title "k6 Load Smoke Test - 5 vUser Execution"
echo

echo "${bold}...execution complete"