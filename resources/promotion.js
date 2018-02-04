class PromotionResource {

    /**
     * Create a PromotionResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getPromotionPath(id) {
        if (id) {
            return `/services/promotions/${id}`;
        }
        return '/services/promotions';
    }

    static getPromotionCountPath() {
        return '/services/promotions/count';
    }

    getPromotions(id, params){
        return this.shoploClient.get(PromotionResource.getPromotionPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(PromotionResource.getPromotionCountPath(), params);
    }

    createPromotion(promotion){
        return this.shoploClient.create(PromotionResource.getPromotionPath(null), { promotion });
    }

    updatePromotion(id, promotion){
        return this.shoploClient.update(PromotionResource.getPromotionPath(id), { promotion });
    }

    deletePromotion(id){
        return this.shoploClient.delete(PromotionResource.getPromotionPath(id), null);
    }
}

module.exports = PromotionResource;
