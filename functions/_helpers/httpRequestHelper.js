const { Resources } = require('../_resources');

const getRequestSource = (req) => {
    if (req.method === Resources.params.HTTP_METHODS.GET) {
        return req.query.source;
    } else {
        return req.body.source;
    }
};

const invalidRequestError = (code, msg) => {
    return {
        isValid: false,
        code,
        msg
    }
};

function validateRequestPrerequisites(req, ...supportedMethods) {
    const reqMethod = req.method;
    const isReqMethodSupported = supportedMethods.indexOf(reqMethod) >= 0;

    if (!isReqMethodSupported) {
        return invalidRequestError(405, Resources.msg('http.method.not.supported', 'httpErrors', null, reqMethod));
    }

    let reqSource = getRequestSource(req);
    if (!reqSource) {
        return invalidRequestError(400, Resources.msg('http.request.parameter.missing', 'httpErrors', null, 'source'));
    }

    let reqSourceFormatted = Resources.params.REQ_SOURCES[reqSource];
    if (!reqSourceFormatted) {
        return invalidRequestError(400, Resources.msg('http.request.parameter.invalid', 'httpErrors', null, 'source'));
    }

    return {
        isValid: true,
        requestSource: reqSourceFormatted
    };
}

module.exports = {
    validateRequestPrerequisites: validateRequestPrerequisites
};
