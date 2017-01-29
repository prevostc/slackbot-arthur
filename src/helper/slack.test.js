const proxyquire = require('proxyquire');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Slack helper', () => {

    let slack, send;

    beforeEach(() => {
        send = {
            ok: sinon.stub(),
            ex: sinon.stub(),
        };
        slack = proxyquire('./slack', { './response': send });
    });

    it('Provide a slack handler that respond in channel', () => {
        const bot = sinon.stub();
        const handler = slack.serverlessHandler(bot);

        const event = { body: 'command=%2Farthur&text=blabla' };
        const context = {};
        const callback = sinon.stub();

        bot.returns('hello slack');

        // calls the handler
        handler(event, context, callback);

        // we called the response ok helper
        expect(send.ex.calledOnce).to.equal(false);
        expect(send.ok.calledOnce).to.equal(true);
        expect(send.ok.getCall(0).args).to.deep.equal([
            callback,
            {
                response_type: 'in_channel',
                text: 'hello slack',
            }
        ]);

        // the bot got the input text passed in
        expect(bot.calledOnce).to.equal(true);
        expect(bot.getCall(0).args).to.deep.equal(['blabla']);
    });

    it('Should handle business code exceptions', () => {
        const bot = sinon.stub();
        const handler = slack.serverlessHandler(bot);

        const event = { body: '' };
        const context = {};
        const callback = sinon.stub();

        bot.throws('an error occured');

        // calls the handler
        handler(event, context, callback);

        // we called the response ok helper
        expect(send.ok.calledOnce).to.equal(false);
        expect(send.ex.calledOnce).to.equal(true);

        // the bot got the input text passed in
        expect(bot.calledOnce).to.equal(true);
    });
});