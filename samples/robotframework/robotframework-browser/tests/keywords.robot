*** Settings ***
Library          Browser

*** Keywords ***
Set TestRail Property
    [Arguments]    ${key}    ${value}
    Set Test Documentation    ${\n}- ${key}: ${value}    append=True

Open TestRail Homepage    
    New Page    https://www.testrail.com/
    Wait Until Network Is Idle    timeout=10s

Verify Header Main Links    
    Get Element States    .breakdance-menu-list [href*='/platform/']      contains    visible
    Get Element States    .breakdance-menu-list [href*='/enterprise/']    contains    visible
    Set TestRail Property    testrail_result_comment    All links are visible

Verify Header Demo Link
    Get Element States    .breakdance-menu-list [href*='/invalid/']   contains    visible
    Get Text              .breakdance-menu-list [href*='/invalid/']   ==          Get Demo

Click Demo Link
    Click    .breakdance-menu-list [href*='/invalid/']

Verify Demo Page URL
    Get Url    contains    /demo

Verify Footer Links    
    Get Element States  [href*='linkedin.com/company/testrail']   contains    visible
    Get Element States  [href*='facebook.com/testrailofficial']   contains    visible

Take Screenshot And Report
    ${path} =    Take Screenshot    failure-{index}
    Set TestRail Property    testrail_attachment    ${path}

Close Test Browser
    Run Keyword If    '${TEST_STATUS}' != 'PASS'    Take Screenshot And Report
    Close Browser    CURRENT
