export const config = {

    runner: 'local',

    specs: [
        './features/**/*.feature'
    ],

    maxInstances: 1,

    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ["--headless", "user-agent=...", "--disable-gpu", "--window-size=1440,735"]
        }
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 1000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 2,

    framework: 'cucumber',

    reporters: [
        ['junit', {
            outputDir: './results',
            outputFileFormat: function () {
                return `webdriverIO-test-results.xml`
            }
        }]
    ],

    cucumberOpts: {
        require: ['./features/step-definitions/steps.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 6000,
        ignoreUndefinedDefinitions: false
    },

}
