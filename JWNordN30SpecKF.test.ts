import { BasePage } from "./basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//This test looks for "Key Features" for the Nord N30 spec page.
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

class OnePlus extends BasePage {
  url: string = "https://www.oneplus.com/us";
}

const pageObject = new onePlusPageObjects(driver);
jest.setTimeout(30000);

describe("OnePlus Test", () => {
  beforeEach(async () => {
    await pageObject.navigate();
  });

  afterAll(async () => {
    await pageObject.driver.quit();
  });
const fs = require('fs');
  test("Nord N30 Key Features", async () => {
   
    await pageObject.click(pageObject.phones); 
    await pageObject.click(pageObject.NordN305G);
    let currentTabs = await pageObject.driver.getAllWindowHandles();
    await pageObject.driver.switchTo().window(currentTabs[1]);
    //Switch tabs
    await sleep(2000);
    //Scroll slightly
    await pageObject.driver.executeScript("window.scrollBy(0, 200);");
    await pageObject.click(pageObject.specLink);
    await sleep(1500)
    // Get the page source
   const pageSource = await pageObject.driver.getPageSource();
    // Locate the popup element that contains the desired text
   const popupElement = await pageObject.driver.findElement(By.xpath(`//*[@id="page-product2077"]/div[6]/div/div/div/div[3]/div[1]`));
    // Extract the text content of the popup element
   const popupText = await popupElement.getText();
    // Search for specific text within the popup
   const searchText = "Key Features"; 
   if (popupText.includes(searchText)) {
     console.log(`Found the text in the popup: ${searchText}`);
   } else {
     console.log(`Text not found in the popup: ${searchText}`);
   }
    //Take a screenshot
    fs.writeFile(`${__dirname}/NordN30KeyFeatures.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("Screenshot Success!");
    }));
    })});

