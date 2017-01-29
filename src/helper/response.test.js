const proxyquire = require('proxyquire');
const sinon = require('sinon');
const expect = require('chai').expect;

describe('Response helper', () => {

    let response, logger;

    beforeEach(() => {
        logger = {
            error: sinon.stub(),
        };
        response = proxyquire('./response', { './logger': logger });
    });

    it('OK: calls the response callback once with a 200 code and stringify the payload', () => {
        const callback = sinon.stub();

        response.ok(callback, { test: 1 });

        expect(callback.getCall(0)).to.not.equal(null);
        expect(callback.getCall(0).args).to.deep.equal([
            null,
            {
                "body": '{"test":1}',
                "statusCode": 200,
            }
        ]);
    });

    it('Err: calls the response callback once with a 500 code and stringify the payload and log the error', () => {
        const callback = sinon.stub();

        response.err(callback, 'Smth went wrong');

        expect(callback.getCall(0)).to.not.equal(null);
        expect(callback.getCall(0).args).to.deep.equal([
            null,
            {
                "body": '{"error":true,"msg":"Smth went wrong"}',
                "statusCode": 500,
            }
        ]);

        expect(logger.error.calledOnce).to.equal(true);
    });

    it('Ex: calls the response callback once with a 500 code and stringify the payload', () => {
        const callback = sinon.stub();
        const error = new Error('Smth went wrong');

        response.ex(callback, error);

        expect(callback.getCall(0)).to.not.equal(null);
        const parsedError = JSON.parse(callback.getCall(0).args[1].body);

        expect(parsedError.error).to.equal(true);
        expect(parsedError.msg.ex).to.equal(error.message);
        expect(parsedError.msg.stack).to.equal(error.stack);

        expect(logger.error.calledOnce).to.equal(true);
    });
});