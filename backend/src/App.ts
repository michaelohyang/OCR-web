import { json } from "stream/consumers";

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const projectConstant = require('./Util/constant');
const upload = require('./Controller/multer');
const conversion = require('./Controller/convertTextToJSON');
const ocrScanner = require('./Controller/ocrScan');
const database = require('./Controller/firebase');
const fileSys = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Receive the images from the front end and store them in a temopory folder
app.post('/upload', upload.uploadFile.array('medical', 12), (req: any, res: any) => {
  console.log(req.files);
});

// Send the json objects to the front end
app.get('/form', async (req: any, res: any) => {
  fileSys.readdir("./uploads", (err: any, files: any) => {
    if (err) {
      console.log('Unable to scan directory: ' + err);
    }

    files.forEach(async (file: any) => {
      let imagePath: string = "./uploads/" + file;
      await ocrScanner.getOCRtxt(imagePath);
      let textPath: string = "./src/ConvertedFileToText/ocrResult.txt"; 
      // let json_object: JSON = conversion.convertTextToJSON(textPath);
      let json_object = {name: "Kevin", age: 12};
      console.log("the backend is sending ", json_object);
      res.send(json_object);
      try {
        fileSys.unlinkSync(imagePath);
      } catch(err) {
        console.error(err);
      }
    });
  });
});

// Receive the updated json objects from the front end
app.post('/confirmForm?id=project_id', async (req: any, res: any) => {
  var finalformInJSON = req.body;
  var project_id = req.query.id;
  let forms = await database.getJsonData(`Project/${project_id}/forms`);
  console.log(forms);
  forms.push(finalformInJSON);
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
  res.send(projects);
});

// Delete a project permanently using its ID
app.post('/delete', (req: any, res: any) => {
  let projectId = req.query.id;
  console.log(projectId);
  database.deleteData(`Project/${projectId}`);
});

app.listen(projectConstant.PORT, () =>
  console.log(`App listening on port ${projectConstant.PORT}!`),
);