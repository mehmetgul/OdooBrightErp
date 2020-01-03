package com.odooBrightERP.pages;


import com.odooBrightERP.utulities.ConfigurationReader;
import com.odooBrightERP.utulities.Driver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


//according to page object model design
//we have to create corresponded page class
//for each page of application
//login page = login page class
//every page class will store webelements and methods related to that page
public class LoginPage extends BasePage{

    @FindBy(id="login") //this line will initialize web element
    public WebElement userNameInput;

    @FindBy(id = "password")//without findby, web element will be null
    public WebElement passwordInput;

    @FindBy(xpath = "//button[@type='submit']")
    public WebElement loginButton;

    @FindBy(xpath = "//form/p")
    public WebElement warningMessage;

    public LoginPage() {
        //it's mandatory if you want to use @FindBy annotation
        //this means LoginPage class
        //Driver.get() return webdriver object
        PageFactory.initElements(Driver.get(), this);
    }

    /**
     * reusable login method
     * just call this method to login
     * provide username and password as parameters
     * @param userName
     * @param password
     */
    public void login(String userName, String password){
        clickOnSignInButton();
        userNameInput.sendKeys(userName);
        //Keys.ENTER to replace login click
        passwordInput.sendKeys(password, Keys.ENTER);
    }

    public void login(){

       login(ConfigurationReader.getProperty("username"), ConfigurationReader.getProperty("password"));
    }

    //we overloaded login () method with different parameter
    public void login(String role){
        String userName = "";
      //  String password = ConfigurationReader.getProperty("password");
        String password = "";
        switch(role){
            case "event scrm manager":
            userName = ConfigurationReader.getProperty("event.scrm.manager.username56");
            password = ConfigurationReader.getProperty("event.scrm.manager.password");
            break;
            case "expenses manager":
                userName = ConfigurationReader.getProperty("expenses.manager.username65");
                password = ConfigurationReader.getProperty("expenses.manager.password");
                break;
            case "sales manager":
                userName = ConfigurationReader.getProperty("sales.manager.username60");
                password = ConfigurationReader.getProperty("sales.manager.password");
                break;
            default:
                throw new RuntimeException("Invalid role!");
        }

        login(userName,password);

    }

}
