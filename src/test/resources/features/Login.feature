Feature: Login
  As a user, I want to be able to login into OdooBrightERP under different roles with username and password

  @login_with_credentials_ddt
  Scenario Outline: DDT example with credentials, Login as <username>
    Given user is on the login page
    Then user enters "<username>" username and "<password>" password
    Examples:
      | username                      | password         |
      | sales.manager.username60      | salesmanager     |
      | expenses.manager.username65   | expensesmanager  |
      | event.scrm.manager.username56 | eventscrmmanager |

