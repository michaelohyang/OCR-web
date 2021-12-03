// Below uses google cloud vision api
// TODO: set env var below  before running
// export GOOGLE_APPLICATION_CREDENTIALS="'../secret/glossy-motif-327704-23cf5a80138d.json'"
const vision = require("@google-cloud/vision");
var fs = require("fs");

const client = new vision.ImageAnnotatorClient();
const getOCRtxt = async (filePath: String) => {
  const [result] = await client.documentTextDetection(filePath);
  const fullTextAnnotation = result.fullTextAnnotation;
  // TODO: modify path as necessary

  var logger = fs.createWriteStream( "../ConvertedFileToText/ocrResult.txt", {
    flags: "a",
  });
  logger.write(fullTextAnnotation.text);
  // fs.unlinkSync(filePath);
};

module.exports = {
  getOCRtxt
};

getOCRtxt("../test.png")