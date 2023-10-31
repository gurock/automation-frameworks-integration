package com.idera.testrail.tests;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.testrail.junit.customjunitxml.annotations.TestRail;

import static org.junit.jupiter.api.Assertions.assertTrue;


class HomePageTest {

    public static WebDriver driver;

    @BeforeEach
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        options.addArguments("--remote-allow-origins=*");
        options.addArguments("--window-size=1920,1080");
        options.addArguments("--start-maximized");
        options.addArguments("--no-proxy-server");
        options.addArguments("disable-infobars"); // Disabling infobars
        options.addArguments("--disable-web-security");
        options.addArguments("--allow-running-insecure-content");
        options.addArguments("--ignore-certificate-errors");
        options.addArguments("--disable-extensions"); // Disabling extensions
        options.addArguments("--disable-dev-shm-usage"); // Overcome limited resource problems
        options.addArguments("--no-sandbox"); // Bypass OS security model
        driver = new ChromeDriver(options);
        // Navigation: Open a website
        driver.navigate().to("https://www.gurock.com/testrail");
    }

    @AfterEach
    public void tearDown() {
        // Quit Driver after each test is completed
        driver.quit();
    }

    @Test
    @TestRail(id = "100")
    void verifyTitleOfHomePage() {
        // Assertion: Check its title is correct
        assertTrue(driver.getTitle().contains("TestRail"));
    }

    @TestRail(id = "101")
    @Test
    void verifyPresenceOfDemoLinkOnHomePage() {
        // Assertion: Check the presence of demo link
        By demoButtonSelector = By.linkText("Get a Demo");
        WebElement demoButton = driver.findElement(demoButtonSelector);
        assertTrue(demoButton.isDisplayed());
    }

    @Test
    @TestRail(id = "102")
    void invalidTest() {
        assertTrue(driver.getTitle().contains("WRONG TITLE"));
    }
}
