const slack = require('./src/helper/slack');

module.exports.hello =  slack.serverlessHandler(require('./src/hello'));
module.exports.parrot =  slack.serverlessHandler(require('./src/parrot'));

