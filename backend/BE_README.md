<p align="center">
    <img width="200" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg">
</p>

<h1 align="center" style="margin-top: 0px;">StudyFind Back End Development </h1>

[![Build and Test React OCR Backend](https://github.com/michaelohyang/OCR-web/actions/workflows/server.yml/badge.svg)](https://github.com/michaelohyang/OCR-web/actions/workflows/server.yml)

## Installation

This module is created and runs via [npm](https://www.npmjs.com/) which is bunder with [node](https://nodejs.org/en/), therefore please ensure that you have node and npm installed. For more information on the dependecies, you can check it out in the package.json file. Please ensure that you are in the backend directory in your terminal and run the following commands:

```
npm install
npm start
```

> You have to start your backend server to ensure the front end works properly. 

## Page Components

The main page is `app.js`. This page is used to store and execute all endpoints connecting the front end and the back end. 

There are a total of 4 pages in the Controller folder. More information of each page can be found below:

- `entityExtraction.ts`: This file contains operations that extracts street address, email, phone number, name, and other sentences from a text string. Please note that extractAddress uses api key that needs to be replaced with a new one. Currently api key is being stored as a variable in the file, which is a bad practice, so we suggest removing it and declaring it as a env varaible.
- `firebase.ts`: This file is used to connect to firebase, currently it's only using firebase realtime storage service. It contains operations that fetches data, write data, overwrite data, and delete data at the input reference location. Notice that it's currently using an api key that needs to be replaced with a new one. Currently api key is being stored as a variable(firebaseConfig) in the file, which is a bad practice, so we suggest removing it and declaring it as a env varaible.
- `multer.ts`: This file is used to implement 'multer' package which is used to receive the image uploaded from the front end. 
- `ocrScan.ts`: This file is used to scan the input image(png, jpg, jpeg, etc) that outputs a string such that each entry scanned in sparated by a new line '\n'. Please note that this file uses google vision api key that needs to be replaced with a new one. Currently api key is being stored as a variable in the file, which is a bad practice, so we suggest removing it and declaring it as a env varaible.

There is one more page called `constant.ts` in the Util folder. This files stores some constants used in the backend files. 

## How To Set Up Firebase
Step 1. Delete firebaseConfig content from firebase.ts and get a new one. Instruction for how to find your own firebaseConfig can be found in https://firebase.google.com/docs/web/setup.
Step 2. Save your firebaseConfig as a env variable or some kind of secret and reference it to firebaseConfig in firebase.ts

## How To Set Up The Backend
Step 1. After setting up the firebase, run `export GOOGLE_APPLICATION_CREDENTIALS="./VisionAPISecret/glossy-motif-327704-23cf5a80138d.json"` to set up the Google API OCR Scanner.
Step 2. Boot up our application by running the command above. 
Step 3. If you see the message `App listening on port <PORT NUMBER>!` in the console, you are all set!

## Credits

```
Jiaxuan Chen, Chenyu Dai, Shuge Fan, Michael Oh-Yang, Peiqi Zhao
```
