class PaymentResource {

    /**
     * Create a PaymentResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getPaymentPath(id) {
        if (id) {
            return `/services/payment/${id}`;
        }
        return '/services/payment';
    }

    static getPaymentCountPath() {
        return '/services/payment/count';
    }

    getPayments(id, params){
        return this.shoploClient.get(PaymentResource.getPaymentPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(PaymentResource.getPaymentCountPath(), params);
    }
}

module.exports = PaymentResource;