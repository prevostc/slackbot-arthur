const send = require('./helper/response');

module.exports = (event, context, callback) => {
    try {
        var body = {
            "response_type": "in_channel",
            "text": "COUILLÈRE",
        };

        send.ok(callback, body);
    } catch (e) {
        send.ex(callback, e);
    }
};
