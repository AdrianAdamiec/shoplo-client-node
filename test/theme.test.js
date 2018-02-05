describe('Shoplo theme resource', () => {
    'use strict';

    const expect = require('chai').expect;
    const qs = require('qs');

    const fixtures = require('./fixtures/theme');
    const base = require('./base');
    const ThemeResource = require('../resources/theme');

    const shoplo = base.shoplo;
    const shopClient = base.shoploClient;
    const themeResource = new ThemeResource(shopClient);

    it('gets the theme list', () => {
        const output = fixtures.res.list;

        shoplo
            .get('/services/themes')
            .reply(200, output);

        return themeResource.getThemes()
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('gets the theme', () => {
        const output = fixtures.res.get;

        shoplo
            .get('/services/themes/24')
            .reply(200, output);

        return themeResource.getThemes(24)
            .then(data => expect(data.body).to.deep.equal(output));
    });

    it('updates a theme', () => {
        const input = fixtures.req.update;
        const output = fixtures.res.update;

        shoplo
            .put('/services/themes/24', qs.stringify({ 'theme': input }))
            .reply(200, output);

        return themeResource.updateTheme(24, input)
            .then(data => expect(data.body).to.deep.equal(output));
    });
});
