describe('Shoplo variant resource', () => {
    'use strict';

    const qs = require('qs');
    const expect = require('chai').expect;

    const fixtures = require('./fixtures/variant');
    const base = require('./base');
    const VariantResource = require('../resources/variant');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const variantResource = new VariantResource(shopClient);

    it('gets a variant', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/products/2027/variants/25844')
            .reply(200, output);

        return variantResource.getVariants(2027, 25844)
            .then(data => {
                expect(data.body).to.deep.equal(output);
            });
    });

    it('gets a variants count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/products/2027/variants/count')
            .reply(200, output);

        return variantResource.getCount(2027)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets a variants list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/products/2027/variants')
            .reply(200, output);

        return variantResource.getVariants(2027)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new variant', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/products/2027/variants', qs.stringify({ 'variant': input }))
            .reply(201, output);

        return variantResource.createVariant(2027, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a variant', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/products/2027/variants/25844', qs.stringify({ 'variant': input }))
            .reply(200, output);

        return variantResource.updateVariant(2027, 25844, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a variant', () => {

        shoplo
            .delete('/services/products/2027/variants/25844')
            .reply(200, []);

        return variantResource.deleteVariant(2027, 25844)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
