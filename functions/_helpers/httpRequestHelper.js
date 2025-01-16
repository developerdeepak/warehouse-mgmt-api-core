const isReqMethodSupported = (reqMthod, method) => {
    return reqMthod === method;
};

exports.isGetRequest = (req) => {
    return isReqMethodSupported(req.method, 'GET');
};

exports.isPostRequest = (req) => {
    return isReqMethodSupported(req.method, 'POST');
};
