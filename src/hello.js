const slack = require('./helper/slack');

module.exports = slack.serverlessHandler(() => {
    return "COUILLÈRE";
});

