'use strict';

class ShopResource {

    /**
     * Create a ShopResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getUserPath() {
        return '/services/shop';
    }

    getShop(){
        return this.shoploClient.get(ShopResource.getUserPath(), null);
    }
}

module.exports = ShopResource;
