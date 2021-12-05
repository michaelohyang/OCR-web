const multer = require("multer");
const backendConstant = require("../Util/constant");
var fs = require("fs");

/**
 * The disk storage engine gives you full control on storing files to disk.
 * 
 */
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