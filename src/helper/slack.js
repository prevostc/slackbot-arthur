const query = require('./query');
const send = require('./response');

/**
 * Make it easy to create slack functions
 * The handler function passed as parameter takes the command as argument
 * and should return the command text result
 * Everything from slack return format to serverless input format should be abstracted away
 * @param {Function} handler
 */
module.exports.serverlessHandler = (handler) => (event, context, callback) => {
    try {
        const params = query.formBody(event);

        const response = handler(params.text);

        const body = {
            "response_type": "in_channel",
            "text": response,
        };

        send.ok(callback, body);
    } catch (e) {
        send.ex(callback, e);
    }
};
