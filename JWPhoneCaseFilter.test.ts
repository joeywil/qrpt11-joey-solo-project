import { BasePage } from "./basePageJW";
import { Builder, By, Capabilities, promise, until, WebDriver } from "selenium-webdriver";
import { onePlusPageObjects } from "./onePlusPageObjects";
function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
//This test filters the phone cases and looks for proper compatability.
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

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
  test("Testing phone case compatability filter results.", async () => {
   
    
    await pageObject.click(pageObject.accessories);
    await pageObject.click(pageObject.casesandProtection);
    await pageObject.click(pageObject.caseOnePlus9Pro);
    
    await sleep(2000);
    fs.writeFile(`${__dirname}/Screenshots/Phone Case Filter/OnePlus9Pro.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("OnePlus 9 Pro Screenshot Success!.")
    }));
    await pageObject.click(pageObject.caseOnePlus9Pro);
    await pageObject.click(pageObject.caseOnePlus8);
    await sleep(2000);
    fs.writeFile(`${__dirname}/Screenshots/Phone Case Filter/OnePlus8.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("OnePlus 8 Screenshot Success!.")
    }));
    await pageObject.click(pageObject.caseOnePlus8);
    await pageObject.click(pageObject.viewMore);
    await sleep(1500);
    await pageObject.click(pageObject.caseOnePlusN10);
    await sleep(2000);
    fs.writeFile(`${__dirname}/Screenshots/Phone Case Filter/OnePlusN10.png`,
    await pageObject.driver.takeScreenshot(), "base64", 
    (e =>{
        if (e) console.log(e);
        else console.log("OnePlus N10 Screenshot Success!.")
    }));
  })});

