*** Settings ***
Library   Browser

*** Test Cases ***
Verify Presence Of Header Links
    New Page    https://www.testrail.com/
    Wait Until Network Is Idle    timeout=10s
    Get Text    h1    contains    Testing
    ${old_mode} =      Set Strict Mode    False
    Get Element States  xpath=//a[contains(@href,"platform")]   contains    visible
    Get Element States  xpath=//a[contains(@href,"enterprise")]   contains    visible
    Close Browser    ALL

Verify Presence Of Demo Link
    New Page    https://www.testrail.com/
    Get Element States  xpath=//*[contains(@href,"invalidlocator")][1]   contains    visible
    Close Browser    ALL