const express = require('express');
const cors = require('cors');
const projectConstant = require('./Util/constant');
const upload = require('./Controller/multer');
const getOCR = require('./Controller/ocrScan');
const convert = require('./Controller/convertTextToJSON');

const app = express();
app.use(cors());

app.post('/upload', upload.uploadFile.array('medical', 12), (req: any, res: any) => {
  console.log(req.files);
});

app.listen(projectConstant.PORT, () =>
  console.log(`App listening on port ${projectConstant.PORT}!`),
);