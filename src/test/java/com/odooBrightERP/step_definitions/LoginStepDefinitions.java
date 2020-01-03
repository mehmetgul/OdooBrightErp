package com.odooBrightERP.step_definitions;

import com.odooBrightERP.pages.LoginPage;
import com.odooBrightERP.utulities.ConfigurationReader;
import com.odooBrightERP.utulities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginStepDefinitions {

    LoginPage loginPage = new LoginPage();

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        System.out.println("I am on the login page");
        Driver.get().get(ConfigurationReader.getProperty("url"));
    }

    @Then("user enters {string} username and {string} password")
    public void user_enters_username_and_password(String string, String string2) {
        System.out.println("Login with "+string+" username and "+string2+" password.");
        loginPage.login(string, string2);
    }
}
