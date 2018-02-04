describe('Shoplo payment resource', () => {
    'use strict';

    const expect = require('chai').expect;

    const fixtures = require('./fixtures/payment');
    const base = require('./base');
    const PaymentResource = require('../resources/payment');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const paymentResource = new PaymentResource(shopClient);

    it('gets payment list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/payment')
            .reply(200, output);

        return paymentResource.getPayments()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets payment', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/payment/2')
            .reply(200, output);

        return paymentResource.getPayments('2')
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets payment count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/payment/count')
            .reply(200, output);

        return paymentResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });
});
