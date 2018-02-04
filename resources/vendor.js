class VendorResource {

    /**
     * Create a VendorResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getVendorPath(id) {
        if (id) {
            return `/services/vendors/${id}`;
        }
        return '/services/vendors';
    }

    static getVendorCountPath() {
        return '/services/vendors/count';
    }

    getVendors(id, params){
        return this.shoploClient.get(VendorResource.getVendorPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(VendorResource.getVendorCountPath(), params);
    }

    createVendor(vendor){
        return this.shoploClient.create(VendorResource.getVendorPath(null), { vendor });
    }

    updateVendor(id, vendor){
        return this.shoploClient.update(VendorResource.getVendorPath(id), { vendor });
    }

    deleteVendor(id){
        return this.shoploClient.delete(VendorResource.getVendorPath(id), null);
    }
}

module.exports = VendorResource;
