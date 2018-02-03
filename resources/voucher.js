class VoucherResource {

    /**
     * Create a VoucherResource instance.
     *
     * @param {Object} shoploClient
     */
    constructor(shoploClient) {
        this.shoploClient = shoploClient;
    }

    static getVoucherPath(id) {
        if (id) {
            return `/services/vouchers/${id}`;
        }
        return '/services/vouchers';
    }

    static getVoucherCountPath() {
        return '/services/vouchers/count';
    }

    getVouchers(id, params){
        return this.shoploClient.get(VoucherResource.getVoucherPath(id), params);
    }

    getCount(params){
        return this.shoploClient.get(VoucherResource.getVoucherCountPath(), params);
    }

    createVoucher(voucher){
        return this.shoploClient.create(VoucherResource.getVoucherPath(null), { voucher:voucher });
    }

    updateVoucher(id, voucher){
        return this.shoploClient.update(VoucherResource.getVoucherPath(id), { voucher:voucher });
    }

    deleteVoucher(id){
        return this.shoploClient.delete(VoucherResource.getVoucherPath(id), null);
    }
}

module.exports = VoucherResource;
