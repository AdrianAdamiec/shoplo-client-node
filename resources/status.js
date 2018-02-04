class StatusResource {

    /**
     * Create a StatusResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getStatusPath(id) {
        if (id) {
            return `/services/statuses/${id}`;
        }
        return '/services/statuses';
    }

    static getStatusCountPath() {
        return '/services/statuses/count';
    }

    getStatuses(id, params){
        return this.shoploClient.get(StatusResource.getStatusePath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(StatusResource.getStatuseCountPath(), params);
    }

    createStatus(status){
        return this.shoploClient.create(StatusResource.getStatusePath(null), { status });
    }

    updateStatus(id, status){
        return this.shoploClient.update(StatusResource.getStatusePath(id), { status });
    }

    deleteStatus(id){
        return this.shoploClient.delete(StatusResource.getStatusePath(id), null);
    }
}

module.exports = StatusResource;
