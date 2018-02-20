'use strict';

class ShippingResource {

    /**
     * Create a ShippingResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getShippingPath(id) {
        if (id) {
            return `/services/shipping/${id}`;
        }
        return '/services/shipping';
    }

    static getShippingCountPath() {
        return '/services/shipping/count';
    }

    getShippings(id, params){
        return this.shoploClient.get(ShippingResource.getShippingPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(ShippingResource.getShippingCountPath(), params);
    }

    createShipping(shipping){
        return this.shoploClient.create(ShippingResource.getShippingPath(null), { shipping });
    }

    updateShipping(id, shipping){
        return this.shoploClient.update(ShippingResource.getShippingPath(id), { shipping });
    }

    deleteShipping(id){
        return this.shoploClient.delete(ShippingResource.getShippingPath(id), null);
    }
}

module.exports = ShippingResource;
