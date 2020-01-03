$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As a user, I want to be able to login into OdooBrightERP under different roles with username and password",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "DDT example with credentials, Login as \u003cusername\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_credentials_ddt"
    }
  ]
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" username and \"\u003cpassword\u003e\" password",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "sales.manager.username60",
        "salesmanager"
      ]
    },
    {
      "cells": [
        "expenses.manager.username65",
        "expensesmanager"
      ]
    },
    {
      "cells": [
        "event.scrm.manager.username56",
        "eventscrmmanager"
      ]
    }
  ]
});
formatter.scenario({
  "name": "DDT example with credentials, Login as sales.manager.username60",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_credentials_ddt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"sales.manager.username60\" username and \"salesmanager\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "DDT example with credentials, Login as expenses.manager.username65",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_credentials_ddt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"expenses.manager.username65\" username and \"expensesmanager\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "DDT example with credentials, Login as event.scrm.manager.username56",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login_with_credentials_ddt"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"event.scrm.manager.username56\" username and \"eventscrmmanager\" password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinitions.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});