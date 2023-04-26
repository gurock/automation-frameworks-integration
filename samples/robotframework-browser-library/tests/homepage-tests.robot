*** Settings ***
Library   Browser

*** Test Cases ***
Website Launch Test
    New Page    https://playwright.dev
    Get Text    h1    contains    Playwright

Home Page Test
    New Page    https://www.testrail.com/
    Click       xpath=//*[@id="home_hero"]/div[3]/div[2]/div[2]/div[2]/a
    Wait Until Network Is Idle    timeout=10s
    ${previous} =  Switch Page    NEW
    Get Text    h1    contains    Demo

Invalid Test
    New Page    https://www.testrail.com/
    Get Text    h1    contains    InvalidText
    