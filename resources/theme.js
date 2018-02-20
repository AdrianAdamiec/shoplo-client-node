'use strict';

class ThemeResource {

    /**
     * Create a ThemeResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getThemePath(id) {
        if (id) {
            return `/services/themes/${id}`;
        }
        return '/services/themes';
    }

    getThemes(id, params){
        return this.shoploClient.get(ThemeResource.getThemePath(id), params);
    }

    updateTheme(id, theme){
        return this.shoploClient.update(ThemeResource.getThemePath(id), { theme });
    }
}

module.exports = ThemeResource;
