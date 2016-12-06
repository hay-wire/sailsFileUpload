/* Created by prashant sudeep on 6th Dec 2016 */
let AWS = require('aws-sdk');
var fs = require('fs');

let upload_file = function (file_path, file_key, callback) {
  AWS.config.update(sails.config.aws_config);
  let s3 = new AWS.S3({apiVersion: '2006-03-01'});
  fs.readFile(file_path, function (err, data) {
    var params = {
      Key: sails.config.s3_config.base_key+'/'+file_key,
      Body: data,
      Bucket : sails.config.s3_config.bucket_name
    };
    s3.upload(params,function (error, result) {
      return callback(error, result);
    });
  });
}

module.exports = {
  upload_file : upload_file
}