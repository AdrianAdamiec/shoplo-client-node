describe('Shoplo abandoned cart resource', () => {
    'use strict';

    const expect = require('chai').expect;

    const fixtures = require('./fixtures/abandoned_cart');
    const base = require('./base');
    const AbandonedCartResource = require('../resources/abandoned_cart');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const abandonedCartResource = new AbandonedCartResource(shopClient);

    it('gets abandoned carts list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/checkout')
            .reply(200, output);

        return abandonedCartResource.getAbandonedCarts()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets abandoned cart', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/checkout/qpLd1zdJ32SSl2B4')
            .reply(200, output);

        return abandonedCartResource.getAbandonedCarts('qpLd1zdJ32SSl2B4')
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets abandoned carts count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/checkout/count')
            .reply(200, output);

        return abandonedCartResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });
});
