import { BasePage } from "./basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//This test searches for user manuals for the latest device.
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
class OnePlus extends BasePage {
  url: string = "https://www.oneplus.com/us";
};
const pageObject = new onePlusPageObjects(driver);
jest.setTimeout(20000);

describe("OnePlus Test", () => {
  beforeEach(async () => {
    await pageObject.navigate();
  });

  afterAll(async () => {
    await pageObject.driver.quit();
});
const fs = require('fs');
  test("User manual search.", async () => {
    //Find the user manuals.
    await pageObject.click(pageObject.supportLink); 
    await pageObject.click(pageObject.userManual)
    //Switch Tabs.
    let currentTabs = await pageObject.driver.getAllWindowHandles();
    await pageObject.driver.switchTo().window(currentTabs[1]);
    await sleep(2000);
    //Find and confirm the download link for the OnePlus 11 5G.
   const UMTDLElement = await pageObject.driver.findElement(pageObject.onePlus11UMDL);
    const onePlus11UMDLDisplayed = await UMTDLElement.isDisplayed();
    console.log("Is user manual download link visible?", onePlus11UMDLDisplayed);
    expect(onePlus11UMDLDisplayed).toBe(true);
    //Take a screenshot and log its success.
    fs.writeFile(`${__dirname}/UserManual.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("Screen Shot Success!");
    }));
    })});



