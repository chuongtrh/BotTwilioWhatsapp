var helper = require('../shared/helper');

var AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4'
});

var s3 = new AWS.S3();

function buildBucket(type) {
    return `${process.env.S3_BUCKET}/${process.env.S3_FOLDER}/${type}`;
}

function uploadBuffer(bucket, filename, buffer, contentType) {
    return new Promise((resolve, reject) => {
        if (buffer && buffer.length > 0 && filename && filename.length > 0) {

            var params = {
                Bucket: bucket,
                Key: filename,
                ContentType: contentType,
                ContentLength: buffer.length,
                Body: buffer
            }
            s3.upload(params, function (err, data) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(data.Location);
                }
            });
        } else {
            return reject(new Error('Invalid Buffer'));
        }
    });
}

exports.uploadBufferPDF = (inputURL, buffer) => {
    const filename = helper.getFileNameFromURLString(inputURL);
    const bucket = buildBucket('contracts');
    return uploadBuffer(bucket, filename, buffer, 'application/pdf');
}

exports.uploadBufferImage = (type, contentType, buffer) => {
    const filename = helper.generateGUILD();
    const bucket = buildBucket(type);
    return uploadBuffer(bucket, filename, buffer, contentType);
}

exports.uploadURLImageToS3 = (url) => {
    return helper.getBufferFromURL(url)
    .then(output => {
        return this.uploadBufferImage('charts', output.contentType, output.buffer)
    })
}