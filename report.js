$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/LoginPage.feature");
formatter.feature({
  "name": "Adactin Hotel Reservation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to enter into Adactin page",
  "keyword": "Given "
});
formatter.step({
  "name": "I should login \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I should search hotel \"\u003clocation\u003e\" and \"\u003chotel\u003e\" and \"\u003croom\u003e\" and \"\u003cnum\u003e\" and \"\u003ccheckin\u003e\" and \"\u003ccheckout\u003e\" and \"\u003cadults\u003e\" and \"\u003cchildren\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should select hotel",
  "keyword": "And "
});
formatter.step({
  "name": "I should book hotel \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003caddress\u003e\" and \"\u003ccard\u003e\" and \"\u003ctype\u003e\" and \"\u003cmonth\u003e\" and \"\u003cyear\u003e\" and \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I should print the order number",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "location",
        "hotel",
        "room",
        "num",
        "checkin",
        "checkout",
        "adults",
        "children",
        "firstName",
        "lastName",
        "address",
        "card",
        "type",
        "month",
        "year",
        "cvv"
      ]
    },
    {
      "cells": [
        "yugasri19",
        "Saibaba@1991",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "23/09/2021",
        "24/09/2021",
        "1 - One",
        "0 - None",
        "Yugasri",
        "Karthi",
        "India",
        "1234567812345678",
        "American Express",
        "January",
        "2022",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I want to enter into Adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.loginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should login \"yugasri19\" and \"Saibaba@1991\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.credential(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should search hotel \"Sydney\" and \"Hotel Creek\" and \"Standard\" and \"1 - One\" and \"23/09/2021\" and \"24/09/2021\" and \"1 - One\" and \"0 - None\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should select hotel",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.select()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should book hotel \"Yugasri\" and \"Karthi\" and \"India\" and \"1234567812345678\" and \"American Express\" and \"January\" and \"2022\" and \"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.booking(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should print the order number",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.orderNumber()"
});
formatter.result({
  "status": "passed"
});
});