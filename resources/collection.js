'use strict';

class CollectionResource {

    /**
     * Create a CollectionResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getCollectionPath(id) {
        if (id) {
            return `/services/collections/${id}`;
        }
        return '/services/collections';
    }

    static getCollectionCountPath() {
        return '/services/collections/count';
    }

    getCollections(id, params){
        return this.shoploClient.get(CollectionResource.getCollectionPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(CollectionResource.getCollectionCountPath(), params);
    }

    createCollection(collection){
        return this.shoploClient.create(CollectionResource.getCollectionPath(null), { collection });
    }

    updateCollection(id, collection){
        return this.shoploClient.update(CollectionResource.getCollectionPath(id), { collection });
    }

    deleteCollection(id){
        return this.shoploClient.delete(CollectionResource.getCollectionPath(id), null);
    }
}

module.exports = CollectionResource;
