describe('Shoplo', () => {
    'use strict';

    const expect = require('chai').expect;
    const assign = require('lodash/assign');
    const nock = require('nock');
    const got = require('got');

    const base = require('./base');
    const pkg = require('../package');
    const Shoplo = require('..');

    const accessToken   = base.config.accessToken;
    const secretToken   = base.config.secretToken;
    const callbackUrl   = base.config.callbackUrl;
    const clientKey     = base.config.clientKey;
    const clientSecret  = base.config.clientSecret;
    const shoploClient  = base.shoploClient;


    it('exports the constructor', () => {
        expect(Shoplo).to.be.a('class');
    });

    it('throws an error when required options missing or invalid', () => {

        expect(() => new Shoplo()).to.throw(Error, 'Mising app configuration');
        expect(() => new Shoplo({})).to.throw(Error, 'Mising app configuration');
        expect(() => new Shoplo({ clientSecret })).to.throw(Error, 'Must provide client key');
        expect(() => new Shoplo({ clientKey })).to.throw(Error, 'Must provide client secret');
        expect(() => new Shoplo({ clientKey, clientSecret })).to.throw(Error, 'Must provide callback url');
    });


});