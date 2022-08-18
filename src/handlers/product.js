const full05 = require('../models/product');
const full05Model = require('../models/product');

const transformer = full05 => ({
 
        type: 'products',
        id: full05.id,
        attributes: {

            DECLARANT: full05.DECLARANT,
            DECLARANT_ISO: full05.DECLARANT_ISO,
            PARTNER: full05.PARTNER,
            PARTNER_ISO: full05.PARTNER_ISO,
            TRADE_TYPE: full05.TRADE_TYPE,
            PRODUCT_NC: full05.PRODUCT_NC,
            PRODUCT_SITC: full05.PRODUCT_SITC,
            PRODUCT_CPA2002: full05.PRODUCT_CPA2002,
            PRODUCT_CPA2008: full05.PRODUCT_CPA2008,
            PRODUCT_CPA2_1: full05.PRODUCT_CPA2_1,
            PRODUCT_BEC: full05.PRODUCT_BEC,
            PRODUCT_BEC5: full05.PRODUCT_BEC5,
            PRODUCT_SECTION: full05.PRODUCT_SECTION,
            FLOW: full05.FLOW,
            STAT_REGIME: full05.STAT_REGIME,
            PERIOD: full05.PERIOD,
            VALUE_IN_EUROS: full05.VALUE_IN_EUROS,
            QUANTITY_IN_KG: full05.QUANTITY_IN_KG,
            SUP_QUANTITY: full05.SUP_QUANTITY,
            VALUE_IN_EUROS_ON_QUANTITY_IN_KG: full05.VALUE_IN_EUROS_ON_QUANTITY_IN_KG,
        },
        links: {
            self: `/api/v1/full05/${full05.id}`
        }

});

const getAll = async (request, h) => {
    
    const full05 = await full05Model.find({});
    return { data: full05.map(transformer)};
};

async function find(req) {
    const full05 = await full05Model.findById(req.params.id);
    return { data: transformer(full05) };
};


const save = async (req, h) => {
    
    const { DECLARANT, DECLARANT_ISO, PARTNER, PARTNER_ISO, TRADE_TYPE, PRODUCT_NC, PRODUCT_SITC, PRODUCT_CPA2002, PRODUCT_CPA2008, PRODUCT_CPA2_1, PRODUCT_BEC, PRODUCT_BEC5, PRODUCT_SECTION, FLOW, STAT_REGIME, PERIOD, VALUE_IN_EUROS, QUANTITY_IN_KG, SUP_QUANTITY, VALUE_IN_EUROS_ON_QUANTITY_IN_KG } = req.payload;
    
    const full05 = new full05Model;
 
    full05.DECLARANT = DECLARANT;
    full05.DECLARANT_ISO = DECLARANT_ISO;
    full05.PARTNER = PARTNER;
    full05.PARTNER_ISO = PARTNER_ISO;
    full05.TRADE_TYPE = TRADE_TYPE;
    full05.PRODUCT_NC = PRODUCT_NC;
    full05.PRODUCT_SITC = PRODUCT_SITC;
    full05.PRODUCT_CPA2002 = PRODUCT_CPA2002;
    full05.PRODUCT_CPA2008 = PRODUCT_CPA2008,
    full05.PRODUCT_CPA2_1 = PRODUCT_CPA2_1;
    full05.PRODUCT_BEC = PRODUCT_BEC;
    full05.PRODUCT_BEC5 = PRODUCT_BEC5;
    full05.PRODUCT_SECTION = PRODUCT_SECTION;
    full05.FLOW = FLOW;
    full05.STAT_REGIME = STAT_REGIME;
    full05.PERIOD = PERIOD;
    full05.VALUE_IN_EUROS = VALUE_IN_EUROS;
    full05.QUANTITY_IN_KG = QUANTITY_IN_KG;
    full05.SUP_QUANTITY = SUP_QUANTITY;
    full05.VALUE_IN_EUROS_ON_QUANTITY_IN_KG = VALUE_IN_EUROS_ON_QUANTITY_IN_KG;

    await full05.save();

    return h.response(transformer(full05)).code(201);
};

const remove = async(req, h) => {
    await full05Model.findOneAndDelete({ _id: req.params.id });
    return h.response().code(204);
}

module.exports = {
    getAll,
    find,
    save,
    remove
};