// const multer = require("multer");
// const backendConstant = require("../Util/constant");
// const fileSystem = require('./fileSystem');
// const userName = "Kevin";
// var express = require('express')
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:any) {
    cb(null, './uploads')
  },
  filename: function (req:any, file:any, cb:any) {
    cb(null, file.originalname)
  }
})
module.exports = {uploadFile: multer({ storage: storage })};

// const storage = multer.diskStorage({
//   destination: (req: any, file: any, cb: any) => {
//     fileSystem.createUploadDirectory(userName);
//     cb(null, `./${backendConstant.defaultFolder}/${userName}`);
//   },
//   filename: (req: any, file: any, cb: any) => {
//     var realName = file.originalname.split(".")[0];
//     var extension = file.originalname.split(".")[1];
//     var fileName = realName + "-" + Date.now() + "." + extension;
//     console.log('fileName', fileName)
//     cb(null, fileName);
//   },
  
// });

// module.exports = {uploadFile: multer({ storage: storage })};
