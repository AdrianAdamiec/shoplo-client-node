describe('Shoplo product resource', () => {
    'use strict';

    const httpBuildQuery = require('http-build-query');
    const expect = require('chai').expect;

    const fixtures = require('./fixtures/product');
    const base = require('./base');
    const ProductResource = require('../resources/product');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const productResource = new ProductResource(shopClient);

    it('gets a product', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/products/2027')
            .reply(200, output);

        return productResource.getProducts(2027)
            .then(data => {
                expect(data.body).to.deep.equal(output);
                expect(data.body.products.id).to.equal('2027');
            });
    });

    it('gets a products count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/products/count')
            .reply(200, output);

        return productResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets a products list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/products')
            .reply(200, output);

        return productResource.getProducts()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new product', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/products', httpBuildQuery({ 'product': input }))
            .reply(201, output);

        return productResource.createProduct(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new product', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/products', httpBuildQuery({ 'product': input }))
            .reply(201, output);

        return productResource.createProduct(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a product', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/products/2027', httpBuildQuery({ 'product': input }))
            .reply(200, output);

        return productResource.updateProduct(2027, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('bulk create products', () => {
        const input = fixtures.req.bulk_create;
        const output = fixtures.res.bulk_create;

        shoplo
            .post('/services/products_bulk', httpBuildQuery({ 'products': input }))
            .reply(201, output);

        return productResource.bulkCreateProducts(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('bulk update products', () => {
        const input = fixtures.req.bulk_update;
        const output = fixtures.res.bulk_update;

        shoplo
            .put('/services/products_bulk', httpBuildQuery({ 'products': input }))
            .reply(200, output);

        return productResource.bulkUpdateProducts(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a product', () => {

        shoplo
            .delete('/services/products/2027')
            .reply(200, {});

        return productResource.deleteProduct(2027)
            .then(data => expect(data.body).to.deep.equal({}));
    });
});
