class CategoryResource {

    /**
     * Create a CategoryResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getCategoryPath(id) {
        if (id) {
            return `/services/categories/${id}`;
        }
        return '/services/categories';
    }

    static getCategoryCountPath() {
        return '/services/categories/count';
    }

    getCategories(id, params){
        return this.shoploClient.get(CategoryResource.getCategoryPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(CategoryResource.getCategoryCountPath(), params);
    }

    createCategory(category){
        return this.shoploClient.create(CategoryResource.getCategoryPath(null), {category:category});
    }

    updateCategory(id, category){
        return this.shoploClient.update(CategoryResource.getCategoryPath(id), {category:category});
    }

    deleteCategory(id){
        return this.shoploClient.delete(CategoryResource.getCategoryPath(id), null);
    }
}

module.exports = CategoryResource;