const base = require('./wdio.conf.js');

exports.config = Object.assign(base.config, {
    hostname: '', // Host IP 
    port: 4444,
    path: '/wd/hub',
    maxInstances: 1,

    capabilities: [{
        maxInstances: 1,
        acceptInsecureCerts: true,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--ignore-certificate-errors'],
        },
        'zal:recordVideo': 'false',
        'zal:name': 'wdio-docker-test',
        'zal:build': 'WebDriverIO',
    }],
    services: ['selenium-standalone', 'shared-store'],

    // eslint-disable-next-line object-shorthand, no-unused-vars, func-names
    beforeSession: function (config, capabilities, specs) {
        const specName = String(specs)
            .split('/')
            .pop();
        const buildName = String(specs)
            .split('/', 9)
            .pop();
        capabilities['zal:build'] = buildName;
        capabilities['zal:name'] = specName;
    },
});


