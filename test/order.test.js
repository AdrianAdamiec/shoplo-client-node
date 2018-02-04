describe('Shoplo order resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/order');
    const base = require('./base');
    const OrderResource = require('../resources/order');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const orderResource = new OrderResource(shopClient);

    it('gets the order list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/orders')
            .reply(200, output);

        return orderResource.getOrders()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the order', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/orders/1003')
            .reply(200, output);

        return orderResource.getOrders(1003)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the orders count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/orders/count')
            .reply(200, output);

        return orderResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new order', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/orders', qs.stringify( { 'order': input } ))
            .reply(201, output);

        return orderResource.createOrder(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a order', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/orders/1694', qs.stringify({ 'order': input }))
            .reply(200, output);

        return orderResource.updateOrder(1694, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a order', () => {

        shoplo
            .delete('/services/orders/1694')
            .reply(200, []);

        return orderResource.deleteOrder(1694)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
