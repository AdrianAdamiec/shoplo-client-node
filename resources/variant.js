class VariantResource {

    /**
     * Create a VariantResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getVariantPath(productId, id) {
        if (id) {
            return `/services/products/${productId}/variants/${id}`;
        }
        return `/services/products/${productId}/variants`;
    }

    static getVariantCountPath(productId) {
        return `/services/products/${productId}/variants/count`;
    }

    getVariants(productId, id, params){
        return this.shoploClient.get(VariantResource.getVariantPath(productId, id), params);
    }

    getCount(productId, params){
        return this.shoploClient.get(VariantResource.getVariantCountPath(productId), params);
    }

    createVariant(productId, variant){
        return this.shoploClient.create(VariantResource.getVariantPath(productId, null), {variant:variant});
    }

    updateVariant(productId, id, variant){
        return this.shoploClient.update(VariantResource.getVariantPath(productId, id), {variant:variant});
    }

    deleteVariant(productId, id){
        return this.shoploClient.delete(VariantResource.getVariantPath(productId, id), null);
    }
}

module.exports = VariantResource;