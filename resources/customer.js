'use strict';

class CustomerResource {

    /**
     * Create a CustomerResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getCustomerPath(id) {
        if (id) {
            return `/services/customers/${id}`;
        }
        return '/services/customers';
    }

    static getCustomerCountPath() {
        return '/services/customers/count';
    }

    getCustomers(id, params){
        return this.shoploClient.get(CustomerResource.getCustomerPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(CustomerResource.getCustomerCountPath(), params);
    }

    createCustomer(customer){
        return this.shoploClient.create(CustomerResource.getCustomerPath(null), customer);
    }

    updateCustomer(id, customer){
        return this.shoploClient.update(CustomerResource.getCustomerPath(id), { customer });
    }

    deleteCustomer(id){
        return this.shoploClient.delete(CustomerResource.getCustomerPath(id), null);
    }
}

module.exports = CustomerResource;
