module.exports.ok = (callback, payload) => {
    var response = {
        statusCode: 200,
        body: JSON.stringify(payload),
    };
    callback(null, response);
};

module.exports.err = (callback, err) => {
    // eslint-disable-next-line
    console.log(err);

    var response = {
        statusCode: 500,
        body: JSON.stringify({error: true, msg: err}),
    };
    callback(null, response);
};

module.exports.ex = (callback, ex) => {
    // eslint-disable-next-line
    console.log(ex);

    module.exports.err(callback, {ex: ex.message, stack: ex.stack});
};