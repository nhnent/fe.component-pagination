'use strict';

module.exports = function(config) {
    config.set({
        basePath: './',

        frameworks: ['browserify', 'jasmine'],

        files: [
            'bower_components/jquery/jquery.min.js',
            'node_modules/jasmine-jquery/lib/jasmine-jquery.js',
            'bower_components/tui-code-snippet/code-snippet.js',
            'src/js/*.js',
            {
                pattern: 'test/fixtures/*.html',
                included: false
            }
        ],

        exclude: [
        ],

        preprocessors: {
            'src/**/*.js': ['browserify', 'coverage'],
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true
        },

        reporters: [
            'dots',
            'coverage',
            'junit'
        ],

        coverageReporter: {
            dir: 'report/coverage/',
            reporters: [
                {
                    type: 'html',
                    subdir: function(browser) {
                        return 'report-html/' + browser;
                    }
                },
                {
                    type: 'cobertura',
                    subdir: function(browser) {
                        return 'report-cobertura/' + browser;
                    },
                    file: 'cobertura.txt'
                }
            ]
        },

        junitReporter: {
            outputDir: 'report/junit',
            suite: ''
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browserStack: {
            username: process.env.BROWSER_STACK_USERNAME,
            accessKey: process.env.BROWSER_STACK_ACCESS_KEY,
            project: 'tui-component-calendar'
        },

        customLaunchers: {
            bs_ie8: {
                base: 'BrowserStack',
                os: 'Windows',
                os_version: 'XP',
                browser_version: '8.0',
                browser: 'ie'
            },
            bs_ie9: {
                base: 'BrowserStack',
                os: 'Windows',
                os_version: '7',
                browser_version: '9.0',
                browser: 'ie'
            },
            bs_ie10: {
                base: 'BrowserStack',
                os: 'Windows',
                os_version: '7',
                browser_version: '10.0',
                browser: 'ie'
            },
            bs_ie11: {
                base: 'BrowserStack',
                os: 'Windows',
                os_version: '7',
                browser_version: '11.0',
                browser: 'ie'
            },
            bs_edge: {
                base: 'BrowserStack',
                os: 'Windows',
                os_version: '10',
                browser: 'edge',
                browser_version: 'latest'
            },
            bs_chrome_mac: {
                base: 'BrowserStack',
                os: 'OS X',
                os_version: 'sierra',
                browser: 'chrome',
                browser_version: 'latest'
            },
            bs_firefox_mac: {
                base: 'BrowserStack',
                os: 'OS X',
                os_version: 'sierra',
                browser: 'firefox',
                browser_version: 'latest'
            }
        },

        browsers: [
            'bs_ie8',
            'bs_ie9',
            'bs_ie10',
            'bs_ie11',
            'bs_edge',
            'bs_chrome_mac',
            'bs_firefox_mac'
        ],

        singleRun: true
    });
};
