/**
 * Get body content, tries to parse it as json data
 * @param {Object} event The serverless event object
 * @returns {Object} Body parameters parameters
 */
module.exports.body = (event) => JSON.parse(event.body);

/**
 * Get query GET parameters
 * @param {Object} event The serverless event object
 * @returns {Object} GET parameters
 */
module.exports.params = (event) => event.queryStringParameters;