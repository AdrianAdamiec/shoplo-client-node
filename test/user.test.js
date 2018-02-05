describe('Shoplo user resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/user');
    const base = require('./base');
    const UserResource = require('../resources/user');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const userResource = new UserResource(shopClient);

    it('gets the user list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/users')
            .reply(200, output);

        return userResource.getUsers()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the user', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/users/241')
            .reply(200, output);

        return userResource.getUsers(241)
            .then(data => expect(data.body).to.deep.equal(output));
    });
});
