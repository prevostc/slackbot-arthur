/**
 * Provide a logger, no need for fancy stuff right now, KISS
 * Making it a module made it easy to mock
 */
module.exports = {
    log: console.log,   // eslint-disable-line no-console
    error: console.log, // eslint-disable-line no-console
    info: console.log,  // eslint-disable-line no-console
};