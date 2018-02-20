'use strict';

class AbandonedCartResource {

    /**
     * Create a AbandonedCartResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getAbandonedCartPath(id) {
        if (id) {
            return `/services/checkout/${id}`;
        }
        return '/services/checkout';
    }

    static getAbandonedCartCountPath() {
        return '/services/checkout/count';
    }

    getAbandonedCarts(id, params){
        return this.shoploClient.get(AbandonedCartResource.getAbandonedCartPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(AbandonedCartResource.getAbandonedCartCountPath(), params);
    }
}

module.exports = AbandonedCartResource;
