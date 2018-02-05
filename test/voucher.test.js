describe('Shoplo voucher resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/voucher');
    const base = require('./base');
    const VoucherResource = require('../resources/voucher');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const voucherResource = new VoucherResource(shopClient);

    it('gets the voucher list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/vouchers')
            .reply(200, output);

        return voucherResource.getVouchers()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the voucher', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/vouchers/32')
            .reply(200, output);

        return voucherResource.getVouchers(32)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the vouchers count', () => {
        const output = fixtures.res.count;

        shoplo
            .get('/services/vouchers/count')
            .reply(200, output);

        return voucherResource.getCount()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('creates a new voucher', () => {
        const input = fixtures.req.create;
        const output = fixtures.res.create;

        shoplo
            .post('/services/vouchers', qs.stringify( { 'voucher': input } ))
            .reply(201, output);

        return voucherResource.createVoucher(input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a voucher', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/vouchers/168', qs.stringify({ 'voucher': input }))
            .reply(200, output);

        return voucherResource.updateVoucher(168, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('deletes a voucher', () => {

        shoplo
            .delete('/services/vouchers/168')
            .reply(200, []);

        return voucherResource.deleteVoucher(168)
            .then(data => expect(data.body).to.deep.equal([]));
    });
});
