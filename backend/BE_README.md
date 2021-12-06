<p align="center">
    <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg">
</p>

<h1 align="center" style="margin-top: 0px;">StudyFind Back End Development </h1>

## Installation

This module is created and runs via [npm][npm] which is bunder with [node][node], therefore please ensure that you have node and npm installed. For more information on the dependecies, you can check it out in the package.json file. Please ensure that you are in the backend directory in your terminal and run the following commands:

```
npm install
npm start
```

> You have to start your backend server to ensure the front end works properly. 

## Page Components

The main page is `app.js`. This page is used to store and execute all endpoints connecting the front end and the back end. 

There are a total of 4 pages in the Controller folder. More information of each page can be found below:

- `entityExtraction.ts`: <TODO HERE>
- `firebase.ts`: <TODO HERE>
- `multer.ts`: This file is used to implement 'multer' package which is used to receive the image uploaded from the front end. 
- `ocrScan.ts`: <TODO HERE>

There is one more page called `constant.ts` in the Util folder. This files stores some constants used in the backend files. 

## How To Set Up Firebase
<TO DO HERE>

## How To Set Up The Backend
Step 1. After setting up the firebase, run `export GOOGLE_APPLICATION_CREDENTIALS="./VisionAPISecret/glossy-motif-327704-23cf5a80138d.json"` to set up the Google API OCR Scanner.
Step 2. Boot up our application by running the command above. 
Step 3. If you see the message `App listening on port <PORT NUMBER>!` in the console, you are all set!

## Credits

```
Jiaxuan Chen, Chenyu Dai, Shuge Fan, Michael Oh-Yang, Peiqi Zhao
```
