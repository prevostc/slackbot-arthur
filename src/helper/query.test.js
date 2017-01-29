const expect = require('chai').expect;
const query = require('./query');

describe('Query helper', () => {
    it('Retrieve POST parameters', () => {
        expect(
            query.body({ body: '{"test":1}' })
        ).to.deep.equal({
            test: 1,
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