/* Created by prashant sudeep on 6th Dec 2016 */
'use strict';

const moment = require('moment');
const _ = require('lodash');
const randomstring = require('randomstring');

let upload = (req, res) => {
  req.file('file').upload(function (err, file) {
    const file_name = randomstring.generate();
    if (_.size(file) === 0) {
      return callback(null, "No file selected");
    }
    file = _.first(file);
    console.log(file);
    let file_type = _.split(file.type, '/', 2);
    let file_ext = file_type[1];
    let new_file_name = file_name + "." + file_ext;
    let originalFilePath = file.fd;
    S3UploadService.upload_file(originalFilePath, new_file_name, function (err, file) {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send({
          success: true,
          message: 'File uploaded successfully'
        });
      }
    });
  });
};

let singleUpload = (req, res) => {
	return res.view('file_upload', {
		title: 'Single File Upload Form'
	});
};

module.exports = {
  upload: upload,
  singleUpload: singleUpload
};	