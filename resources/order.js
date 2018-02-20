'use strict';

class OrderResource {

    /**
     * Create a OrderResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getOrderPath(id) {
        if (id) {
            return `/services/orders/${id}`;
        }
        return '/services/orders';
    }

    static getOrderCountPath() {
        return '/services/orders/count';
    }

    getOrders(id, params){
        return this.shoploClient.get(OrderResource.getOrderPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(OrderResource.getOrderCountPath(), params);
    }

    createOrder(order){
        return this.shoploClient.create(OrderResource.getOrderPath(null), { order });
    }

    updateOrder(id, order){
        return this.shoploClient.update(OrderResource.getOrderPath(id), { order });
    }

    deleteOrder(id){
        return this.shoploClient.delete(OrderResource.getOrderPath(id), null);
    }
}

module.exports = OrderResource;
