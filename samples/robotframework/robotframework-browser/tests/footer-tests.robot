*** Settings ***
Library   Browser

*** Test Cases ***
Verify Presence Of Social Links
    New Page    https://www.testrail.com/
    Get Element States  xpath=//a[contains(@href,"linkedin.com")]   contains    visible
    Get Element States  xpath=//a[contains(@href,"facebook.com")]   contains    visible
    Close Browser    ALL