*** Settings ***
Resource         keywords.robot
Test Teardown    Close Test Browser

*** Test Cases ***
Verify Presence Of Social Links
    Open TestRail Homepage
    Verify Footer Links
