const logger = require('./logger');

/**
 * Respond with a success
 * The payload will be json encoded
 * @param {Function} callback The serverless response callback
 * @param {Object} payload Anything you need to send back
 */
module.exports.ok = (callback, payload) => {
    var response = {
        statusCode: 200,
        body: JSON.stringify(payload),
    };
    callback(null, response);
};

/**
 * Respond with a error, also log the error
 * @param {Function} callback The serverless response callback
 * @param {Object} err An error message
 */
module.exports.err = (callback, err) => {
    logger.error(err);

    var response = {
        statusCode: 500,
        body: JSON.stringify({error: true, msg: err}),
    };
    callback(null, response);
};

/**
 * Respond with an exception
 * @param {Function} callback The serverless response callback
 * @param {Object} ex Anything throwable
 */
module.exports.ex = (callback, ex) => {
    module.exports.err(callback, {ex: ex.message, stack: ex.stack});
};