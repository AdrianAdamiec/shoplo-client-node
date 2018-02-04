class ProductResource {

    /**
     * Create a ProductResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getProductPath(id) {
        if (id) {
            return `/services/products/${id}`;
        }
        return '/services/products';
    }

    static getProductCountPath() {
        return '/services/products/count';
    }

    static getProductBulkPath() {
        return '/services/products_bulk';
    }

    getProducts(id, params){
        return this.shoploClient.get(ProductResource.getProductPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(ProductResource.getProductCountPath(), params);
    }

    createProduct(product){
        return this.shoploClient.create(ProductResource.getProductPath(null), { product });
    }

    updateProduct(id, product){
        return this.shoploClient.update(ProductResource.getProductPath(id), { product });
    }

    deleteProduct(id){
        return this.shoploClient.delete(ProductResource.getProductPath(id), null);
    }

    bulkCreateProducts(products){
        return this.shoploClient.create(ProductResource.getProductBulkPath(), { products });
    }

    bulkUpdateProducts(products){
        return this.shoploClient.update(ProductResource.getProductBulkPath(), { products });
    }
}

module.exports = ProductResource;
