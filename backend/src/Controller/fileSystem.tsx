var fs = require("fs");
var path = require("path");
const constant = require("../Util/constant.tsx");
/**
 * This function checks if a diectory exists. Create one if it does not exist.
 *
 * @param name The name of the user's name.
 */
function createDirectory(userName: any) {
  // create root directory if it does not exist
  const rootDir = `${constant.defaultFolder}`;
  if (!fs.existsSync(rootDir)) {
    fs.mkdir(rootDir, () => {
      console.log(`${rootDir} has been created! `);
    });
  }
  // create directory based on username
  const dir = path.join(constant.defaultFolder, userName);
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, () => {
      console.log(`${dir} has been created! `);
    });
  }
}

module.exports = { createDirectory };
