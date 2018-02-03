const ShoploClient = require('..');
const nock = require('nock');

const config = {
    callbackUrl: 'callbackUrl',
    clientKey: 'clientKey',
    clientSecret: 'clientSecret',
    accessToken: 'accessToken',
    secretToken: 'secretToken',
    apiHost: 'api.shoplo.tech'
};

const shoploClient = new ShoploClient(config);
const shoplo = nock(`https://${config.apiHost}`);

module.exports = {
    shoplo,
    shoploClient,
    config
};
