const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const full05Schema = new Schema({
    DECLARANT: String,
    DECLARANT_ISO: String,
    PARTNER: String,
    PARTNER_ISO: String,
    TRADE_TYPE: String,
    PRODUCT_NC: String,
    PRODUCT_SITC: String,
    PRODUCT_CPA2002: String,
    PRODUCT_CPA2008: String,
    PRODUCT_CPA2_1: String,
    PRODUCT_BEC: String,
    PRODUCT_BEC5: String,
    PRODUCT_SECTION: String,
    FLOW: String,
    STAT_REGIME: String,
    PERIOD: String,
    VALUE_IN_EUROS: String,
    QUANTITY_IN_KG: String,
    SUP_QUANTITY: String,
    VALUE_IN_EUROS_ON_QUANTITY_IN_KG: String

});

module.exports = mongoose.model('full05', full05Schema);