*** Settings ***
Library          SeleniumLibrary

*** Keywords ***
Set TestRail Property
    [Arguments]    ${key}    ${value}
    Set Test Documentation    ${\n}- ${key}: ${value}    append=True

Open TestRail Homepage    
    Open Browser
    ...    url=https://www.testrail.com
    ...    browser=chrome
    ...    browser=headlesschrome
    Set Window Size    1920    1080

Verify Header Main Links    
    Wait Until Element Is Visible    css=.breakdance-menu-list [href*='/platform/']
    Wait Until Element Is Visible    css=.breakdance-menu-list [href*='/enterprise/']
    Set TestRail Property    testrail_result_comment    All links are visible

Verify Header Demo Link
    Wait Until Element Is Visible    css=.breakdance-menu-list [href*='/invalid/']
    Element Should Contain           css=.breakdance-menu-list [href*='/invalid/']    Get Demo

Click Demo Link
    Click Element    css=.breakdance-menu-list [href*='/invalid/']

Verify Demo Page URL
    Location Should Be    /demo

Verify Footer Links    
    Wait Until Element Is Visible    css=[href*='linkedin.com/company/testrail']
    Wait Until Element Is Visible    css=[href*='facebook.com/testrailofficial']

Take Screenshot And Report
    ${path} =    Capture Page Screenshot    filename=failure-{index}.png
    Set TestRail Property    testrail_attachment    ${path}

Close Test Browser
    Run Keyword If    '${TEST_STATUS}' != 'PASS'    Take Screenshot And Report
    Close Browser
