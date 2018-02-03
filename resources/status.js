class StatuseResource {

    /**
     * Create a StatuseResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getStatusePath(id) {
        if (id) {
            return `/services/statuses/${id}`;
        }
        return '/services/statuses';
    }

    static getStatuseCountPath() {
        return '/services/statuses/count';
    }

    getStatuses(id, params){
        return this.shoploClient.get(StatuseResource.getStatusePath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(StatuseResource.getStatuseCountPath(), params);
    }

    createStatuse(statuse){
        return this.shoploClient.create(StatuseResource.getStatusePath(null), { statuse:statuse });
    }

    updateStatuse(id, statuse){
        return this.shoploClient.update(StatuseResource.getStatusePath(id), { statuse:statuse });
    }

    deleteStatuse(id){
        return this.shoploClient.delete(StatuseResource.getStatusePath(id), null);
    }
}

module.exports = StatuseResource;
