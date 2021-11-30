var fs = require("fs");
var path = require("path");
const constant = require("../Util/constant");

/**
 * This function checks if a upload directory exists. Create one if it does not exist.
 *
 */

function createUploadDirectory() {
  // create 'backend/uploads' directory if it does not exist
  const rootDir = `${constant.defaultFolder}`;
  if (!fs.existsSync(rootDir)) {
    fs.mkdir(rootDir, () => {
      console.log(`${rootDir} has been created! `);
    });
  }
}

/**
 * This function checks if an output directory exists. Create one if it does not exist.
 *
 * @param name The name of the user's name.
 */

 function createOutputDirectory(fileName: String, data: any) {
  const rootDir = `${constant.outputFolder}`;
  if (!fs.existsSync(rootDir)) {
    fs.mkdir(rootDir, () => {
      console.log(`${rootDir} has been created! `);
    });
  }
  // check if output.json exists
  if (fs.existsSync(`./${constant.outputFolder}/${fileName}`)) {
    // append data to output.json
    fs.readFile(`./${constant.outputFolder}/${fileName}`, 'utf8', (err: any, existingData: any) => {
      if (err) {
        console.log(err);
      } else {
        let currData = JSON.parse(existingData);
        currData.push(data);
        fs.writeFile(`./${constant.outputFolder}/${fileName}`, JSON.stringify(currData, null, 4), (req: any, res: any) => {
          console.log("The output file has been updated! ");
        });
      }
    })
  } else {
    // create output.json file and add data to it
    let dataList = [data];
    fs.writeFile(`./${constant.outputFolder}/${fileName}`, JSON.stringify(dataList, null, 4), (req: any, res: any) => {
      console.log("The output file has been created! ");
    });
  }
}

module.exports = {createUploadDirectory, createOutputDirectory};
