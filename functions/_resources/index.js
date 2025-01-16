const bundles = {
    genericErrors: require('./genericErrors.json'),
    httpErrors: require('./httpErrors.json')
};

function getMsg(key, bundle) {
    return bundles[bundle][key];
}

function getFormattedMsg(key, bundle, ...args) {
    let formattedMsg = getMsg(key, bundle);
    args.forEach((item, index) => {
        formattedMsg = formattedMsg.replace(`{${index}}`, `'${item}'`);
    });
    return formattedMsg;
}

function msg() {
    let args = [...arguments];
    let key = args[0] || null,
        bundle = args[1] || null,
        defaultValue = args[2] || null,
        params = args.splice(3, args.length - 1) || null;

    if (bundle == null) {
        return getMsg('resource.bundle.name.required', 'genericErrors');
    }

    if (key == null) {
        return getMsg('resource.key.name.required', 'genericErrors');
    }

    let bundleJSON = bundles[bundle];
    if (!bundleJSON) {
        return getFormattedMsg('resource.bundle.not.exist', 'genericErrors', bundle);
    }

    let stringValue = bundleJSON[key];
    if (!stringValue) {
        if (defaultValue == null) {
            return getFormattedMsg('resource.key.not.exist', 'genericErrors', key, bundle);
        } else {
            stringValue = defaultValue;
        }
    } else if(params.length > 0) {
        return getFormattedMsg(key, bundle, ...params);
    } else {
        return stringValue;
    }
}

exports.Resources = {
    msg: msg
};
