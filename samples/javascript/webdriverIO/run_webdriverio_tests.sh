#!/bin/bash
clear
bold=$(tput bold)
echo "${bold}-----------------------------------------"
echo "${bold}- WebdriverIO TestRail Sample Run Scrip -"
echo "${bold}-----------------------------------------"
echo

echo "${bold}...verify TRCLI is installed"
echo
trcli
echo

echo "${bold}...install dependencies"
echo
npm install
echo

echo "${bold}...Execute webdriverIO test"
echo
npx wdio run wdio.conf.js
echo

echo "${bold}...executing TestRail CLI, uploading results in new test run"
echo
trcli -y -c "trcli-config.yml" parse_junit -f "results/test-results.xml" --title "Automation Demo - WebdriverIO"
echo

echo "${bold}...execution complete"
