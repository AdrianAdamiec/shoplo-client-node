describe('Shoplo order status resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/status');
    const base = require('./base');
    const StatusResource = require('../resources/status');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const statusResource = new StatusResource(shopClient);

    it('gets the statuses list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/statuses')
            .reply(200, output);

        return statusResource.getStatuses()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the status', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/statuses/90')
            .reply(200, output);

        return statusResource.getStatuses(90)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the statuses count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/statuses/count')
            .reply(200, output);

        return statusResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new status', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/statuses', qs.stringify( { 'status': input } ))
            .reply(201, output);

        return statusResource.createStatus(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a status', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/statuses/98', qs.stringify({ 'status': input }))
            .reply(200, output);

        return statusResource.updateStatus(98, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a status', () => {

        shoplo
            .delete('/services/statuses/98')
            .reply(200, []);

        return statusResource.deleteStatus(98)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
