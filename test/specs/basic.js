const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('https://www.seleniumeasy.com/test/')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'Selenium Easy - Best Demo website to practice Selenium Webdriver Online')
    })
})