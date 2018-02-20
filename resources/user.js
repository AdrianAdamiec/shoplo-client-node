'use strict';

class UserResource {

    /**
     * Create a UserResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getUserPath(id) {
        if (id) {
            return `/services/users/${id}`;
        }
        return '/services/users';
    }

    getUsers(id, params){
        return this.shoploClient.get(UserResource.getUserPath(id), params);
    }
}

module.exports = UserResource;
