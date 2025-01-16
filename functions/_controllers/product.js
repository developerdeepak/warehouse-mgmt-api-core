const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { httpRequestHelper } = require('../_helpers');
const { Resources } = require('../_resources');

exports.AddProduct = onRequest((req, res) => {
    if(!httpRequestHelper.isPostRequest(req)) {
        return res.status(405).json({
            msg: Resources.msg('http.method.not.supported', 'httpErrors', null, req.method)
        });
    }
});