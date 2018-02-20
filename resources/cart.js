'use strict';

class CartResource {

    /**
     * Create a CartResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getCartPath(id) {
        if (id) {
            return `/services/carts/${id}`;
        }
        return '/services/carts';
    }

    static getCartCountPath() {
        return '/services/carts/count';
    }

    getCarts(id, params){
        return this.shoploClient.get(CartResource.getCartPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(CartResource.getCartCountPath(), params);
    }

    createCart(cart){
        return this.shoploClient.create(CartResource.getCartPath(null), { cart });
    }

    updateCart(id, cart){
        return this.shoploClient.update(CartResource.getCartPath(id), { cart });
    }

    deleteCart(id){
        return this.shoploClient.delete(CartResource.getCartPath(id), null);
    }
}

module.exports = CartResource;
