import { BasePage } from "./basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//This test verifies sharing of community posts.
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
  test("Community Link Sharing Test.", async () => {
   
    await pageObject.click(pageObject.communityLink); 
    //Navigate to the community page
    let currentTabs = await pageObject.driver.getAllWindowHandles();
    await pageObject.driver.switchTo().window(currentTabs[1]);
    //Switch tabs
    await pageObject.click(pageObject.communityNord3Design);
    await sleep(2000);
    //Click comment link
    await pageObject.click(pageObject.commentLink);
    await sleep(2000);
    //Click share and copy link
    await pageObject.click(pageObject.communityShare);
    await pageObject.click(pageObject.copyLink);
    //Take a screenshot
    fs.writeFile(`${__dirname}/CommunityShare.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("Screenshot Success!");
    }));
    })});

