*** Settings ***
Documentation     Simple homepage links tests
Library           SeleniumLibrary
Test Setup        Open Browser On TestRail Homepage
Test Teardown     Close Browser
Suite Teardown    Close All Browsers

*** Test Cases ***
Verify Header Links
    Wait Until Element Is Visible    //*[@href='/platform/']
    Wait Until Element Is Visible    //*[@href='/enterprise/']
    Wait Until Element Is Visible    //*[@href='/pricing/']

Verify Social Links
    Wait Until Element Is Visible    //*[@href='https://www.linkedin.com/company/testrail/']

Verify Action Links
    Wait Until Element Is Visible    //*[contains(@href,'webinar/register')]
    Wait Until Element Is Visible    //*[@href='/get_trial_invalid_link/']

*** Keywords ***
Open Browser On TestRail Homepage
    ${session} =    Open Browser
    ...    url=https://www.gurock.com
    ...    browser=chrome
    Maximize Browser Window
