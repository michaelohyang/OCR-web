// Below uses tesseract
// const {
//     createWorker
// } = require('tesseract.js');
// const fs = require('fs')
// const PSM = require('tesseract.js/src/constants/PSM.js')
// const worker = createWorker({
//     logger: m => console.log(m)
// });

// async function getOCRtxt(fileName: String) {
//     await worker.load();
//     await worker.loadLanguage('eng');
//     await worker.initialize('eng');
//     await worker.setParameters({
//         tessedit_pageseg_mode: PSM.AUTO,
//     })
//     const {
//         data: {
//             text
//         }
//     } = await worker.recognize(fileName);
//     console.log(text);
//     var logger = fs.createWriteStream('OCRresult.txt', {
//         flags: 'a'
//     })
//     logger.write(text);
//     await worker.terminate();
// }


// Below uses google cloud vision api
// TODO: set env var below  before running 
// export GOOGLE_APPLICATION_CREDENTIALS="'../secret/glossy-motif-327704-23cf5a80138d.json'"
const vision = require('@google-cloud/vision');
const fs = require('fs')
const client = new vision.ImageAnnotatorClient();
async function getOCRtxt(fileName: String) {
    const [result] = await client.documentTextDetection(fileName);
    const fullTextAnnotation = result.fullTextAnnotation;
    console.log(`Full text: ${fullTextAnnotation.text}`);
    // TODO: modify path as necessary
    var logger = fs.createWriteStream('OCRresult.txt', {
        flags: 'a'
    })
    logger.write(fullTextAnnotation.text);
}

module.exports = {
    getOCRtxt
};