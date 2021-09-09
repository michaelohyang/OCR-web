const express = require('express');
const cors = require('cors');
const projectConstant = require('./Util/constant.tsx');
var upload = require('./Controller/multer.tsx');

const app = express();
app.use(cors());

app.post('/upload', upload.uploadFile.array('medical', 12), (req, res) => {
  console.log(req.files);
});

app.listen(projectConstant.PORT, () =>
  console.log(`App listening on port ${projectConstant.PORT}!`),
);