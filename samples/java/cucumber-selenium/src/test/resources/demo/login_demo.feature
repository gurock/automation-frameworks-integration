@REQ_LOGIN-9345
Feature: Selenium BDD Demo

  Scenario: Verify TestRail Website Navigation
    Given I navigate to the testrail website
    When I validate the page is loaded
    Then the testrail request demo button is present
