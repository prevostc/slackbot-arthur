const expect = require('chai').expect;
const query = require('./query');

describe('Query helper', () => {
    it('Retrieve POST parameters as json', () => {
        expect(
            query.jsonBody({ body: '{"test":1}' })
        ).to.deep.equal({
            test: 1,
        });
    });

    it('Retrieve POST parameters as form data', () => {
        expect(
            query.formBody({ body: 'text=%22blabla%22&response_url=https%3A%2F%2Fhooks.slack.com%2Fcommands' })
        ).to.deep.equal({
            text: '"blabla"',
            response_url: 'https://hooks.slack.com/commands'
        });
    });

    it('Retrieve GET parameters', () => {
        expect(
            query.params({ queryStringParameters: {test: 1}})
        ).to.deep.equal({
            test: 1,
        });
    });
});