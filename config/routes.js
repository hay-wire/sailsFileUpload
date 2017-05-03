module.exports.routes = {

  '/': {
    view: 'homepage'
  },
  'get /upload' : 'UploadController.singleUpload',
  'post /upload' : 'UploadController.upload'

};
