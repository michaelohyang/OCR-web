// Below uses google cloud vision api
// TODO: set env var below  before running
// export GOOGLE_APPLICATION_CREDENTIALS="/Users/shugefan/Desktop/OCR-web/backend/src/VisionAPISecret/glossy-motif-327704-23cf5a80138d.json"
// $env:GOOGLE_APPLICATION_CREDENTIALS="File Path"
const vision = require("@google-cloud/vision");
var fs = require("fs");

const client = new vision.ImageAnnotatorClient();
const getOCRtxt = async (filePath: String) => {
  const [result] = await client.documentTextDetection(filePath);
  const fullTextAnnotation = result.fullTextAnnotation;
  // TODO: modify path as necessary

  var logger = fs.createWriteStream( "/Users/shugefan/Desktop/OCR-web/backend/src/ConvertedF", {
    flags: "w",
  });
  logger.write(fullTextAnnotation.text);
  logger.end();
};

module.exports = {
  getOCRtxt
};
