const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const projectConstant = require('./Util/constant');
const upload = require('./Controller/multer');
const ocrScanner = require('./Controller/ocrScan');
const database = require('./Controller/firebase');
const extract = require('./entityExtraction');
const fileSys = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/**
 * This endpoint is used to receive images from the front end and store them in a temopory folder in the backend.
 * 
 */
app.post('/upload', upload.uploadFile.array('medical', 12), (req: any, res: any) => {
  console.log(req.files);
});

/**
 * This endpoint is used to send the parsed form to the front end ad a json object.
 * 
 */
app.get('/form', async (req: any, res: any) => {
  fileSys.readdir("./uploads", (err: any, files: any) => {
    if (err) {
      console.log('Unable to scan directory: ' + err);
    }

    files.map(async (file: any) => {
      let imagePath: string = "./uploads/" + file;
      await ocrScanner.getOCRtxt(imagePath);
      setTimeout(async () => {
        let textPath: string = "C:/Users/ohyan/Documents/GATech/CS 3312/OCR-web/OCR-web/backend/src/ConvertedF"; 
        let json_object = {};
        try {
          const data = fileSys.readFileSync(textPath, 'utf8');
          let phoneNumber = extract.extractPhoneNumber(data);
          let name = extract.extractName(data); 
          let address = await extract.extractAddress(data);
          let email = extract.extractEmail(data); 
          let gender = await extract.extractGender(data);
          let medicalFact = await extract.extractSentences(data);
          json_object = {
            Phone: phoneNumber,
            Name: name,
            Address: address,
            Email: email,
            Gender: gender,
            MedicalFact: medicalFact
          }
        } catch (err) {
          console.error(err)
        }
        res.send(json_object);
        try {
          fileSys.unlinkSync(imagePath);
        } catch(err) {
          console.error(err);
        }
      }, 3000);
    });
  })   
});

/**
 * This endpoint is used to receive the updated json objects from the front end.
 * 
 */
app.post('/confirmForm', async (req: any, res: any) => {
  var finalformInJSON = req.body;
  var project_id = req.query.id;
  database.writeNewPost(`Project/${project_id}/forms`, uuidv4(), finalformInJSON);
});

/**
 * This endpoint is used to create a new project.
 * 
 */
app.post('/createProject', (req: any, res: any) => {
  var newProjectDataInJSON = req.body;
  let projectId = uuidv4();
  database.writeNewPost("Project", projectId, newProjectDataInJSON);
});

/**
 * This endpoint is used to send the new project information to the backend database.
 * 
 */
app.get('/projects', async (req: any, res: any) => {
  let projects = await database.getJsonData("Project");
  res.send(projects);
});

/**
 * This endpoint is used to send all forms of a project to the front end based on project id. 
 * 
 */
app.get('/allForms', async (req: any, res: any) => {
  var project_id = req.query.id;
  let projects = await database.getJsonData(`Project/${project_id}/forms`);
  res.send(projects);
});

/**
 * This endpoint is used to delete a project permanently using its ID
 * 
 */
app.post('/delete', (req: any, res: any) => {
  let projectId = req.query.id;
  database.deleteData(`Project/${projectId}`);
});

/**
 * This endpoint is used to start the backend. 
 * 
 */
app.listen(projectConstant.PORT, () =>
  console.log(`App listening on port ${projectConstant.PORT}!`),
);