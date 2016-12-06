/* Created by prashant sudeep on 6th Dec 2016 */
'use strict';

var moment = require('moment'),
	_ = require('lodash');



module.exports = {
	upload: function (request, response) {
		request.file('file').upload(function (err, file ) {
		//console.log(file.length);
		  if(_.size(file) >= 0) {
		    file = _.first(file);
		    //console.log(file);
		    // let file_type = _.split(file.type, '/', 2);
		    // let file_ext = file_type[1];
		    // let new_file_name = file_name + "." +file_ext;
		    let new_file_name = "Test.jpg";
		    let originalFilePath = file.fd;
		    
		    //S3 upload service working for single upload - this function will be in loop for multiple files
		    S3UploadService.upload_file(originalFilePath,new_file_name, function (err, result) {
		      if(err) {
		        response.redirect("/upload?success=false");
		      } else {
		        return response.status(200).send({success: true,message:"Successfully uploaded", data: result});
		        
		      }
		    });
		  }
		});
	}
}	