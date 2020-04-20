const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://www.seleniumeasy.com/test/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
    })
})