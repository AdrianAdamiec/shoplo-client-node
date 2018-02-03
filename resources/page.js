class PageResource {

    /**
     * Create a PageResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getPagePath(id) {
        if (id) {
            return `/services/pages/${id}`;
        }
        return '/services/pages';
    }

    static getPageCountPath() {
        return '/services/pages/count';
    }

    getPages(id, params){
        return this.shoploClient.get(PageResource.getPagePath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(PageResource.getPageCountPath(), params);
    }

    createPage(page){
        return this.shoploClient.create(PageResource.getPagePath(null), {page:page});
    }

    updatePage(id, page){
        return this.shoploClient.update(PageResource.getPagePath(id), {page:page});
    }

    deletePage(id){
        return this.shoploClient.delete(PageResource.getPagePath(id), null);
    }
}

module.exports = PageResource;