describe('Shoplo vendor resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/vendor');
    const base = require('./base');
    const VendorResource = require('../resources/vendor');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const vendorResource = new VendorResource(shopClient);

    it('gets the vendor list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/vendors')
            .reply(200, output);

        return vendorResource.getVendors()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the vendor', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/vendors/23')
            .reply(200, output);

        return vendorResource.getVendors(23)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the vendors count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/vendors/count')
            .reply(200, output);

        return vendorResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new vendor', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/vendors', qs.stringify( { 'vendor': input } ))
            .reply(201, output);

        return vendorResource.createVendor(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a vendor', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/vendors/526', qs.stringify({ 'vendor': input }))
            .reply(200, output);

        return vendorResource.updateVendor(526, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a vendor', () => {

        shoplo
            .delete('/services/vendors/526')
            .reply(200, []);

        return vendorResource.deleteVendor(526)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
