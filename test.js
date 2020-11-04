const assert = require('chai').assert;
const addTwoNums = require('../MochaChai/app').addTwoNums;
const multiplyTwoNumbers = require('../MochaChai/app').multiplyTwoNumbers;
const {Builder,By,Key,util, until} = require("selenium-webdriver");

async function seleniumStart(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://cii.co.uk")

    driver.wait(until.titleIs('Home | Chartered Insurance Institute (CII)'))
    driver.getTitle().then(function(title){
        assert.equal(title, '1Home | Chartered Insurance Institute (CII)')
    })

    driver.quit();

/*    driver.findElement(By.id("#login-link")).click();
    driver.findElement(By.id('#LoginEmail')).sendKeys("ozgurgerilla@gmail.com",Key.RETURN);
    driver.findElement(By.id('#LoginPassword')).sendKeys("gogogo",Key.RETURN);
*/
}

describe("add function tests", () =>
{        
    //this.timeout(5000);
    let driver =  new Builder().forBrowser("chrome").build();

    before(function(){

    })

    after(function(){

    })

    beforeEach(function(){

    })

    afterEach(function(){
    })


    it("cii", async function()
    {
        await driver.get("http://cii.co.uk")

        let title = await driver.getTitle();
        console.log(title)  
        assert.equal(title, 'Home | Chartered Insurance Institute (CII)')
        await driver.findElement(By.id("login-link")).click();
        //driver.quit();
        let logintitle = await driver.getTitle();
        assert.equal(logintitle, 'Login')
        
        await driver.quit();
        
    })

    it("adding two numbers together", () =>
    {
        let addition = addTwoNums(5,5);
        assert.equal(addition,10)
    })

    it("adding a string should not work", () =>
    {
        var addition = addTwoNums(5,"5")
        assert.equal(addition,55)
        assert.notEqual(typeof(addition),typeof(55))
    })


    it("multipler function positive case", () =>
    {
        var multiply = multiplyTwoNumbers(5,5)
        assert.equal(multiply,25)
        assert.equal(typeof(multiply),typeof(55))
        assert.isAbove(multiply,10)
        
    })

})

