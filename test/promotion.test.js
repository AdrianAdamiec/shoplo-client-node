describe('Shoplo promotion resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/promotion');
    const base = require('./base');
    const PromotionResource = require('../resources/promotion');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const promotionResource = new PromotionResource(shopClient);

    it('gets the promotion list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/promotions')
            .reply(200, output);

        return promotionResource.getPromotions()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the promotion', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/promotions/1')
            .reply(200, output);

        return promotionResource.getPromotions(1)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the promotions count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/promotions/count')
            .reply(200, output);

        return promotionResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new promotion', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/promotions', qs.stringify( { 'promotion': input } ))
            .reply(201, output);

        return promotionResource.createPromotion(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a promotion', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/promotions/5', qs.stringify({ 'promotion': input }))
            .reply(200, output);

        return promotionResource.updatePromotion(5, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a promotion', () => {

        shoplo
            .delete('/services/promotions/5')
            .reply(200, []);

        return promotionResource.deletePromotion(5)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
