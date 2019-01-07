const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig({
    spec_dir: 'tests',
    spec_files: ['**/*[sS]pec.js'],
    helpers: [
        "helpers/babel.js",
        "helpers/enzyme.js",
        "helpers/jsdom.js",
        'helpers/**/*.js'
    ],
    random: false,
    seed: null,
    stopSpecOnExpectationFailure: false
});
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

// Setup console reporter
const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 1,
    verbosity: 4,
    listStyle: 'indent',
    timeUnites: 'ms',
    timeThreshold: { ok: 500, warn: 1000, ouch: 3000 },
    activity: true,
    emoji: true,
    beep: true
});

// Initialize and exicute
jasmine.env.clearReporters();
jasmine.addReporter(reporter);

jasmine.execute();