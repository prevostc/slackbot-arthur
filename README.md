# install deps
npm install

# deploy to aws
npm run deploy

# local test
npm run offline

Use postman and call the url : http://localhost:3000/slackbot-arthur

# unit tests
npm test                 # all unit tests

npm run test.unit        # only mocha tests
npm run test.unit.watch  # only mocha tests and watch file changes
npm run test.lint        # only eslint
npm run test.lint.fix    # auto-fix eslint


