const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const projectConstant = require('./Util/constant');
const createDir = require('./Controller/fileSystem');
const upload = require('./Controller/multer');
const conversion = require('./Controller/convertTextToJSON');
const ocrScanner = require('./Controller/ocrScan');
const database = require('./Controller/firebase');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Receive the images from the front end and store them in a temopory folder
app.post('/upload', upload.uploadFile.array('medical', 12), (req: any, res: any) => {
  console.log(req.files);
});

// Send the json objects to the front end
app.post('/form', async (req: any, res: any) => {
  let imagePath: string = "./src/UploadedPictures/test1.jpg";
  await ocrScanner.getOCRtxt(imagePath);
  let textPath: string = "./src/ConvertedFileToText/ocrResult.txt"; 
  let json_object: JSON = conversion.convertTextToJSON(textPath);
  res.send(json_object);
});

// Receive the updated json objects from the front end
app.get('/confirmForm', (req: any, res: any) => {
  var finalDataInJSON = req.body;
  createDir.createOutputDirectory('Output.json', finalDataInJSON);
});

// Send the new project information to the backend database
app.post('/createProject', (req: any, res: any) => {
  var newProjectDataInJSON = req.body;
  let projectId = uuidv4();
  database.writeNewPost("Project", projectId, newProjectDataInJSON);
});

// Send the new project information to the backend database
app.get('/projects', async (req: any, res: any) => {
  let projects = await database.getJsonData("Project");
  console.log(projects);
  res.send(projects);
});

app.listen(projectConstant.PORT, () =>
  console.log(`App listening on port ${projectConstant.PORT}!`),
);