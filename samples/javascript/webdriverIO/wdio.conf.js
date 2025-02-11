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

    // ===================
    // Test Configurations
    // ===================

    logLevel: 'info',

    bail: 0,

    // Default timeout for all waitFor* commands.
    waitforTimeout: 1000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 2,

    // Framework you want to run your specs with.
    framework: 'cucumber',

    // Test reporter for stdout.
    reporters: [
        ['junit', {
            outputDir: './results',
            outputFileFormat: function () {
                return `webdriverIO-test-results.xml`
            }
        }]
    ],

    // If you are using Cucumber you need to specify the location of your step definitions.
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
        //timeout for step definitions
        timeout: 6000,
        ignoreUndefinedDefinitions: false
    },

}
