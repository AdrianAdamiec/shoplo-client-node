describe('Shoplo shipping resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/shipping');
    const base = require('./base');
    const ShippingResource = require('../resources/shipping');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const shippingResource = new ShippingResource(shopClient);

    it('gets the shipping list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/shipping')
            .reply(200, output);

        return shippingResource.getShippings()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the shipping', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/shipping/3')
            .reply(200, output);

        return shippingResource.getShippings(3)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the shippings count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/shipping/count')
            .reply(200, output);

        return shippingResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new shipping', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/shipping', qs.stringify( { 'shipping': input } ))
            .reply(201, output);

        return shippingResource.createShipping(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a shipping', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/shipping/16', qs.stringify({ 'shipping': input }))
            .reply(200, output);

        return shippingResource.updateShipping(16, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a shipping', () => {

        shoplo
            .delete('/services/shipping/16')
            .reply(200, []);

        return shippingResource.deleteShipping(16)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
