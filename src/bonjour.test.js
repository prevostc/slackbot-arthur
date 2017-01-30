const expect = require('chai').expect;
const bonjour = require('./bonjour');

describe('bonjour handler', () => {
    it('should return a random hello phrase', () => {
        expect(bonjour()).to.be.a('string');
    });
});