describe('Shoplo', () => {
    'use strict';

    const expect = require('chai').expect;

    const base = require('./base');
    const Shoplo = require('..');

    // const accessToken   = base.config.accessToken;
    // const secretToken   = base.config.secretToken;
    // const callbackUrl   = base.config.callbackUrl;
    const clientKey     = base.config.clientKey;
    const clientSecret  = base.config.clientSecret;
    // const shoploClient  = base.shoploClient;

    describe('Shoplo constructor validation', () => {

        it('throws an error when required options missing or invalid', () => {

            expect(() => new Shoplo()).to.throw(Error, 'Mising app configuration');
            expect(() => new Shoplo({})).to.throw(Error, 'Must provide client key');
            expect(() => new Shoplo({ clientKey })).to.throw(Error, 'Must provide client secret');
            expect(() => new Shoplo({ clientKey, clientSecret })).to.throw(Error, 'Must provide callback url');
        });

        it('should override api host from config', () => {

            const shoploTest = new Shoplo(base.config);

            expect(shoploTest.apiHost).to.not.equal('api.shoplo.com');
        });
    });
});
