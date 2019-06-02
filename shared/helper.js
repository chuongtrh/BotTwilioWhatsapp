const request = require('request');

exports.generateGUILD = function () {
    var pad4 = function (str) {
        return "0000".substring(str.length) + str;
    };
    var hex4 = function () {
        return pad4(Math.floor(Math.random() * 0x10000 /* 65536 */).toString(16));
    };
    let temp = ''
    for (var i = 0; i < 16; i++) {
        temp += hex4();
    }
    return temp;
}


function getBufferFromURL(url) {
    return new Promise((resolve, reject) => {
        request.defaults({
            encoding: null
        }).get(url, (err, res, body) => {
            if (err) {
                return reject(err);
            } else if (res.statusCode === 200) {
                return resolve({
                    buffer: body,
                    contentType: res.headers['content-type']
                });
            } else {
                return reject('Invalid URL');
            }
        });
    });
}

exports.getBufferFromURL = getBufferFromURL;
exports.randomInRange = (range) => {
    return Math.floor(Math.random() * range)
}

exports.validateURL = (stringURL) => {
    try {
        const url = new URL(stringURL);
        return true;
    } catch (e) {
        return false;
    }
}
exports.getUriFromURLString = (url) => {
    if (url !== undefined) {
        const temp = new URL(url);
        return `${temp.origin}${temp.pathname}`;
    }
    return '';
}
exports.getPathFromURLString = (url) => {
    if (url !== undefined) {
        const temp = new URL(url);
        return temp.pathname;
    }
    return '';
}
exports.getFileNameFromURLString = (url) => {
    if (url !== undefined) {
        return url.split('/')[url.split('/').length - 1];
    }
    return '';
}

exports.getPublicS3URL = (fileName, type = 'others') => {
    return `https://${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com/${process.env.S3_FOLDER}/${type}/${fileName}`;
}

exports.getURLChartFromData = (data) => {
    var jsonString = JSON.stringify(data);
    return `${process.env.CHART_DOMAIN}?bkg=white&c=${encodeURI(jsonString)}`;
}
