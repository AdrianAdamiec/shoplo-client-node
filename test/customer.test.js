describe('Shoplo customer resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/customer');
    const base = require('./base');
    const CustomerResource = require('../resources/customer');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const customerResource = new CustomerResource(shopClient);

    it('gets the customer list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/customers')
            .reply(200, output);

        return customerResource.getCustomers()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the customer', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/customers/7726')
            .reply(200, output);

        return customerResource.getCustomers(7726)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the customers count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/customers/count')
            .reply(200, output);

        return customerResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new customer', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/customers', qs.stringify( input ))
            .reply(201, output);

        return customerResource.createCustomer(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a customer', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/customers/7755', qs.stringify({ 'customer': input }))
            .reply(200, output);

        return customerResource.updateCustomer(7755, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a customer', () => {

        shoplo
            .delete('/services/customers/7755')
            .reply(200, []);

        return customerResource.deleteCustomer(7755)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
