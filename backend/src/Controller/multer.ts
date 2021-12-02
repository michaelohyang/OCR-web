const multer = require("multer");
const backendConstant = require("../Util/constant");
const fileSystem = require('./fileSystem');
var fs = require("fs");

const storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    const rootDir = `${backendConstant.defaultFolder}`;
    if (!fs.existsSync(rootDir)) {
      fs.mkdir(rootDir, () => {
        console.log(`${rootDir} has been created! `);
      });
    }
    cb(null, `./${backendConstant.defaultFolder}`);
  },
  
  filename: (req: any, file: any, cb: any) => {
    var realName = file.originalname.split(".")[0];
    var extension = file.originalname.split(".")[1];
    var fileName = realName + "-" + Date.now() + "." + extension;
    cb(null, fileName);
  },
});

module.exports = {uploadFile: multer({ storage: storage })};