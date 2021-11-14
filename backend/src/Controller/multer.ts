const multer = require("multer");
const backendConstant = require("../Util/constant");
const fileSystem = require('./fileSystem');
const userName = "Kevin";

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    fileSystem.createUploadDirectory(userName);
    cb(null, `./${backendConstant.defaultFolder}/${userName}`);
  },
  filename: (req: any, file: any, cb: any) => {
    var realName = file.originalname.split(".")[0];
    var extension = file.originalname.split(".")[1];
    var fileName = realName + "-" + Date.now() + "." + extension;
    cb(null, fileName);
  },
  
});

module.exports = {uploadFile: multer({ storage: storage })};
