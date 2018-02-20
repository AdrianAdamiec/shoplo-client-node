'use strict';

class AssetResource {

    /**
     * Create a AssetResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getAssetPath(themeId, id) {
        if (id) {
            return `/services/themes/${themeId}/assets?asset[key]=${id}`;
        }
        return `/services/themes/${themeId}/assets`;
    }

    static getAssetCountPath(themeId) {
        return `/services/themes/${themeId}/assets/count`;
    }

    getAssets(themeId, id, params){
        return this.shoploClient.get(AssetResource.getAssetPath(themeId, id), params);
    }

    getCount(themeId, params){
        return this.shoploClient.get(AssetResource.getAssetCountPath(themeId), params);
    }

    createAsset(themeId, asset){
        return this.shoploClient.create(AssetResource.getAssetPath(themeId), { asset });
    }

    updateAsset(themeId, id, asset){
        asset.key = id;
        const assetRequest = { asset:asset };
        return this.shoploClient.create(AssetResource.getAssetPath(themeId, id), assetRequest);
    }

    deleteAsset(themeId, id){
        return this.shoploClient.delete(AssetResource.getAssetPath(themeId, id), null);
    }
}

module.exports = AssetResource;
