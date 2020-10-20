const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const APIResponse = require("../../utils/APIResponse");

module.exports = $baseCtrl(async (req, res) => {
    const orders = await models._order.fetchAll(
        req.allowPagination,
        req.queryFilter,
        {
            ...req.queryOptions,
            populate: 'customer'
        }
    )
    return APIResponse.Ok(res,orders)
});
