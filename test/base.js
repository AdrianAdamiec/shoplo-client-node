const ShoploClient = require('..');
const sinon = require('sinon');

const config = {
    callbackUrl: "callbackUrl",
    clientKey: "clientKey",
    clientSecret: "clientSecret",
    accessToken: "accessToken",
    secretToken: "secretToken"
};

sut = new ShoploClient(config);
shoploClient = sinon.mock(sut.oauthClient);

module.exports = {
    shoploClient,
    config
};