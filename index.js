const url = require('url');
const OAuth1Client = require('oauth-1-client');
const httpBuildQuery = require('http-build-query');
const assert = require('assert');
const _ = require('lodash');

class ShoploClient{

    /**
     * Create a ShoploClient instance.
     *
     * @param {Object} options Configuration options
     * @param {String} options.callbackUrl The callback URL for the Oauth1 flow
     * @param {String} options.clientKey The API Key for the app
     * @param {String} options.clientSecret The Shared Secret for the app
     * @param {Number} [options.timeout] The request timeout
     */
    constructor(options) {
        assert(options, 'Mising app configuration');
        assert(_.isEmpty(options), 'Mising app configuration');
        assert(options, 'Mising app configuration');
        assert(options.clientKey, 'Must provide client key');
        assert(options.clientSecret, 'Must provide client secret');
        assert(options.callbackUrl, 'Must provide callback url');

        this.timeout = 'timeout' in options ? options.timeout : 60000;
        this.clientKey = options.clientKey;
        this.clientSecret = options.clientSecret;
        this.callbackUrl = options.callbackUrl;
        this.apiHost = options.apiHost || 'api.shoplo.com';

        this.client = new OAuth1Client({
            key: this.clientKey,
            secret: this.clientSecret,
            callbackURL: this.callbackUrl,
            requestUrl: this.getRequestTokenUrl(),
            accessUrl: this.getAccessTokenUrl(),
            apiHostName: this.apiHost
        });

        if (options.accessToken && options.secretToken) {

            this.accessToken = options.accessToken;
            this.secretToken = options.secretToken;
            this.client = this.client.auth(this.accessToken, this.secretToken);
        }
    }

    /**
     *
     * @returns {string}
     * @private
     */
    getRequestTokenUrl() {

        return this.getEndpointUrl('/services/oauth/request_token', null);
    }

    /**
     *
     * @returns {string}
     * @private
     */
    getAccessTokenUrl() {

        return this.getEndpointUrl('/services/oauth/access_token', null);
    }

    /**
     *
     * @returns {string}
     * @public
     */
    getAuthorizeUrl(token) {

        const query = {
            oauth_token: token,
            oauth_callback: this.callbackUrl
        };

        return this.getEndpointUrl('/services/oauth/authorize', query);
    }

    /**
     *
     * @returns {string}
     * @public
     */
    getEndpointUrl(path, query){

        return url.format({
            pathname: path,
            hostname: this.apiHost,
            protocol: 'https:',
            query
        });
    }

    /**
     * Request token.
     *
     * @return {Promise} Promise which is fulfilled with the token
     * @public
     */
    getRequestToken() {

        return this.client.requestToken();
    }

    getAccessToken(token, tokenSecret, verifier) {

        return this.client.accessToken(token, tokenSecret, verifier);
    }

    get(path, params){

        return this.client.get(path, params);
    }

    create(path, content){

        return this.client.post(path, httpBuildQuery(content));
    }

    update(path, content){

        return this.client.put(path, httpBuildQuery(content));
    }

    delete(path){

        return this.client.delete(path);
    }
}

module.exports = ShoploClient;