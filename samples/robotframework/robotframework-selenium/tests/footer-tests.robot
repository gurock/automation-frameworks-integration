*** Settings ***
Resource         keywords.robot
Test Teardown    Close Test Browser

*** Test Cases ***
Verify Presence Of Social Links
    [Documentation]    Verifies footer contains the expected social links
    ...    - testrail_case_field: refs:TR-2
    ...    - testrail_result_field: custom_environment:qa
    Open TestRail Homepage
    Verify Footer Links
