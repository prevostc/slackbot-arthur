const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const hello = require('./hello');

describe('Hello world handler', () => {
    it('should return an hello world message using slack format', () => {
        const callback = sinon.stub();

        hello({}, {}, callback);

        expect(callback.getCall(0)).to.not.equal(null);
        expect(callback.getCall(0).args).to.deep.equal([
            null,
            {
                "body": '{"response_type":"in_channel","text":"COUILLÈRE"}',
                "statusCode": 200,
            }
        ]);
    });

});