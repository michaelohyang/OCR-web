var multer = require("multer");
var path = require('path');
const backendConstant = require("../Util/constant.tsx");
const fileSystem = require(path.resolve( __dirname, "./fileSystem.tsx" ) );
const userName = "Kevin";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fileSystem.createDirectory(userName);
    cb(null, `./${backendConstant.defaultFolder}/${userName}`);
  },
  filename: function (req, file, cb) {
    var realName = file.originalname.split('.')[0];
    var extension = file.originalname.split('.')[1];
    var fileName = realName + "-" + Date.now() + "." + extension;
    cb(null, fileName);
  }
})  

module.exports = {uploadFile: multer({ storage: storage })}
