describe('Shoplo shop resource', () => {
    'use strict';

    const expect = require('chai').expect;

    const fixtures = require('./fixtures/shop');
    const base = require('./base');
    const ShopResource = require('../resources/shop');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const shopResource = new ShopResource(shopClient);

    it('gets the shop owner configuration', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/shop')
            .reply(200, output);

        return shopResource.getShop()
            .then(data => expect(data.body).to.deep.equal(output));
    });
});
