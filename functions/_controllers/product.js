const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { httpRequestHelper } = require('../_helpers');
const { Resources } = require('../_resources');

exports.AddProduct = onRequest((req, res) => {
    const validateRequest = httpRequestHelper.validateRequestPrerequisites(req, Resources.params.HTTP_METHODS.POST);

    if(!validateRequest.isValid) {
        return res.status(validateRequest.code).json({
            errMsg: validateRequest.msg
        });
    }

    return res.status(200).json({
        success: true,
        requestSource: validateRequest.requestSource
    });
});

exports.GetProduct = onRequest((req, res) => {
    const validateRequest = httpRequestHelper.validateRequestPrerequisites(req, Resources.params.HTTP_METHODS.GET);

    if(!validateRequest.isValid) {
        return res.status(validateRequest.code).json({
            errMsg: validateRequest.msg
        });
    }

    return res.status(200).json({
        success: true,
        requestSource: validateRequest.requestSource
    });
});

exports.GetAllProducts = onRequest((req, res) => {
    const validateRequest = httpRequestHelper.validateRequestPrerequisites(req, Resources.params.HTTP_METHODS.GET);

    if(!validateRequest.isValid) {
        return res.status(validateRequest.code).json({
            errMsg: validateRequest.msg
        });
    }

    return res.status(200).json({
        success: true,
        requestSource: validateRequest.requestSource
    });
});

exports.UpdateProduct = onRequest((req, res) => {
    const supportedMethods = [Resources.params.HTTP_METHODS.PUT, Resources.params.HTTP_METHODS.PATCH];
    const validateRequest = httpRequestHelper.validateRequestPrerequisites(req, supportedMethods);

    if(!validateRequest.isValid) {
        return res.status(validateRequest.code).json({
            errMsg: validateRequest.msg
        });
    }

    return res.status(200).json({
        success: true,
        requestSource: validateRequest.requestSource
    });
});

exports.DeleteProduct = onRequest((req, res) => {
    const validateRequest = httpRequestHelper.validateRequestPrerequisites(req, Resources.params.HTTP_METHODS.DELETE);

    if(!validateRequest.isValid) {
        return res.status(validateRequest.code).json({
            errMsg: validateRequest.msg
        });
    }

    return res.status(200).json({
        success: true,
        requestSource: validateRequest.requestSource
    });
});
