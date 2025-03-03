*** Settings ***
Resource         keywords.robot
Test Teardown    Close Test Browser

*** Test Cases ***
Verify Presence Of Header Links
    [Documentation]    Verifies header contains platform and enterprise links
    ...    - testrail_case_field: refs:TR-1

    ...    - testrail_result_field: custom_environment:qa
    Open TestRail Homepage
    Verify Header Main Links
    
Verify Presence Of Demo Link
    [Documentation]    Verifies header contains link to request a demo - Intentionally failing
    ...    - testrail_case_field: refs:TR-1

    ...    - testrail_result_field: custom_environment:qa
    Open TestRail Homepage
    Verify Header Demo Link
    Click Demo Link
    Verify Demo Page URL
