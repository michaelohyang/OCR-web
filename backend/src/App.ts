const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const projectConstant = require('./Util/constant');
const createDir = require('./Controller/fileSystem');
const upload = require('./Controller/multer');
const conversion = require('./Controller/convertTextToJSON');
const ocrScanner = require('./Controller/ocrScan');

const app = express();
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
// app.use('/uploads', express.static('uploads'));
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// Receive the images from the front end and store them in a temopory folder
app.post('/upload', upload.uploadFile.array('medical', 12), async (req: any, res: any) => {
  console.log(req) ;
});

// Send the json objects to the front end
// app.get('/form', async (req: any, res: any) => {
//   let imagePath: string = "./src/UploadedPictures/test1.jpg";
//   await ocrScanner.getOCRtxt(imagePath);
//   let textPath: string = "./src/ConvertedFileToText/ocrResult.txt"; 
//   let json_object: JSON = conversion.convertTextToJSON(textPath);
//   res.send(json_object);
// });

// Receive the updated json objects from the front end
// app.post('/confirmForm', (req: any, res: any) => {
//   var finalDataInJSON = req.body;
//   createDir.createOutputDirectory('Output.json', finalDataInJSON);
// });

app.listen(projectConstant.PORT, () =>
  console.log(`App listening on port ${projectConstant.PORT}!`),
);
