package demo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class StepDefinitions {
	private WebDriver driver;

	@Given("^I navigate to the testrail website$")
	public void i_navigate_to_the_testrail_website() {
		System.out.println("Given statement executed successfully");

		WebDriverManager.chromedriver().setup();
		ChromeOptions options = new ChromeOptions();
		options.addArguments("headless");
		options.addArguments("--remote-allow-origins=*");
		options.addArguments("--window-size=1920,1080");
		options.addArguments("--start-maximized");
		options.addArguments("--no-proxy-server");
		options.addArguments("disable-infobars");
		options.addArguments("--disable-web-security");
		options.addArguments("--allow-running-insecure-content");
		options.addArguments("--ignore-certificate-errors");
		options.addArguments("--disable-extensions");
		options.addArguments("--disable-dev-shm-usage"); // Overcome limited resource problems
		options.addArguments("--no-sandbox"); // Bypass OS security model
		driver = new ChromeDriver(options);

		driver.navigate().to("https://www.testrail.com");
	}

	@When("^I validate the page is loaded$")
	public void i_validate_the_page_is_loaded() {
		System.out.println("When statement executed successfully");
		Assert.assertTrue(driver.getTitle().contains("TestRail"));
	}

	@Then("^the testrail request demo button is present$")
	public void the_testrail_request_demo_button_is_present() {

		System.out.println("Then statement executed successfully");

		// Assertion: Check the presence of demo link
		By demoButtonSelector = By.linkText("Get a Demo");
		WebElement demoButton = driver.findElement(demoButtonSelector);
		Assert.assertTrue(demoButton.isDisplayed());
	}
}
