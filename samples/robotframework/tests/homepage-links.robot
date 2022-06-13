*** Settings ***
Documentation     Simple homepage links tests
Library           SeleniumLibrary
Test Setup        Open Browser On TestRail Homepage
Test Teardown     Close Browser
Suite Teardown    Close All Browsers

*** Test Cases ***
Go To My Account Page
    [Documentation]    Goes to my account page
    Click Element          xpath=//*[text()="My Account"]
    Page Should Contain    Please enter your email address and password below

Go To Demo Request Page
    [Documentation]    Goes to request a demo page
    Click Element          xpath=//*[text()="Get a Demo"]
    Page Should Contain    TestRail Product Demo

Go To Trial Request Page
    [Documentation]    This test will go to the trial page and fail on purpose
    Click Element          xpath=//*[text()="Try for Free"]
    Page Should Contain    Hey, this is the wrong text!

*** Keywords ***
Open Browser On TestRail Homepage
    ${session} =    Open Browser
    ...    url=https://www.gurock.com
    ...    browser=chrome
    Maximize Browser Window
