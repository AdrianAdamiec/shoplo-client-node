describe('Shoplo collection resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const httpBuildQuery = require('http-build-query');

    const fixtures = require('./fixtures/collection');
    const base = require('./base');
    const CollectionResource = require('../resources/collection');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const collectionResource = new CollectionResource(shopClient);

    it('gets the collection list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/collections')
            .reply(200, output);

        return collectionResource.getCollections()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the collection', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/collections/18')
            .reply(200, output);

        return collectionResource.getCollections(18)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the collections count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/collections/count')
            .reply(200, output);

        return collectionResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new collection', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/collections', httpBuildQuery({ 'collection': input }))
            .reply(201, output);

        return collectionResource.createCollection(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a collection', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/collections/29', httpBuildQuery({ 'collection': input }))
            .reply(200, output);

        return collectionResource.updateCollection(29, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a collection', () => {

        shoplo
            .delete('/services/collections/29')
            .reply(200, {});

        return collectionResource.deleteCollection(29)
            .then(data => expect(data.body).to.deep.equal({}));
    });
});
