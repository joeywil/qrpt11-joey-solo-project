import { BasePage } from "./basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";
import { elementLocated } from "selenium-webdriver/lib/until";
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/*This test adds a number of items to the cart.*/

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

class OnePlus extends BasePage {
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

  test("adding items to cart", async () => {
    //Selecting OnePlus 11
    await pageObject.click(pageObject.phones);
    await pageObject.click(pageObject.oneplus11);
    //Switching tabs
    let currentTabs = await pageObject.driver.getAllWindowHandles();
    await pageObject.driver.switchTo().window(currentTabs[1]);
    //Making selection and adding to 100 to cart
    await pageObject.click(pageObject.eternalgreen);
    await pageObject.click(pageObject.gb16gb256);
    await pageObject.click(pageObject.addtocart);
    await pageObject.click(pageObject.skipaddons);
    await pageObject.click(pageObject.QtyPlus1);
    await pageObject.sendKeys(pageObject.miniCartQty, "100\n");
   //Verifying "Limit 10 per order" message recieved.
    await sleep(1500);
    await pageObject.driver.wait(until.elementLocated(pageObject.limit10PerDayMsg));
    const limitMsgElement = await pageObject.driver.findElement(pageObject.limit10PerDayMsg);
    const isLimitMsgDisplayed = await limitMsgElement.isDisplayed();
    console.log("Is 10 per day limit message displayed?", isLimitMsgDisplayed);
    expect(isLimitMsgDisplayed).toBe(true);
    //Changing the quantity to 5
    await pageObject.click(pageObject.limit10msgclose);
    await pageObject.click(pageObject.QtyPlus1);
    await pageObject.click(pageObject.QtyPlus1);
    await pageObject.click(pageObject.QtyPlus1);
    await pageObject.click(pageObject.QtyPlus1);
    //Verifying "Limit 4 per order" message recieved.
    await sleep(1500);
    await pageObject.driver.wait(until.elementLocated(pageObject.limit4PerDayMsg));
    const limit4MsgElement = await pageObject.driver.findElement(pageObject.limit4PerDayMsg);
    const isLimit4MsgDisplayed = await limit4MsgElement.isDisplayed();
    console.log("Is 4 per day limit message displayed?", isLimit4MsgDisplayed);
    expect(isLimit4MsgDisplayed).toBe(true);

    });
});