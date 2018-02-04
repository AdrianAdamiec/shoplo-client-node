describe('Shoplo page resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/page');
    const base = require('./base');
    const PageResource = require('../resources/page');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const pageResource = new PageResource(shopClient);

    it('gets the page list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/pages')
            .reply(200, output);

        return pageResource.getPages()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the page', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/pages/1')
            .reply(200, output);

        return pageResource.getPages(1)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the pages count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/pages/count')
            .reply(200, output);

        return pageResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new page', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/pages', qs.stringify( { 'page': input } ))
            .reply(201, output);

        return pageResource.createPage(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a page', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/pages/5', qs.stringify({ 'page': input }))
            .reply(200, output);

        return pageResource.updatePage(5, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a page', () => {

        shoplo
            .delete('/services/pages/5')
            .reply(200, []);

        return pageResource.deletePage(5)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
