# Authors

Jiaxuan Chen, Chenyu Dai, Shuge Fan, Michael Oh-Yang, Peiqi Zhao

# Workflow

https://github.com/michaelohyang/OCR-web/actions/workflows/client.yml

# About

This is a Web application aids researchers and researcher assistants to upload, store and organize images of medical reocrd. Images of medical record would be transferred to machined encoded digital texts using Optical Character Regonition and stored in Firebase cloud.

# Environment

IOS environment:
Window environment:
React:
npm:
Nodejs:

# Dependent libraries

Download Nodejs from https://nodejs.org/en/, and follow the instructions.
Runs "npm -v" and "node -v" to check the npm and node verions after installation.

# Installation

Frontend:
Backend:

# User Navigation

Users are first lead to the home page displaying all existing projects (Each project represents a different medical reserach). Each project are displayed in module including project name and description.

# Project

Users can create new medical research project space by clicking on the module with "add" icon. It is required to input project name, description, and priority (Priority represents the importance of the medical reserach. For future work, the projects displayed on the home page have different colors. Red represents high priority; yellow represents medium priority; and green represetns low priority).

Users can delete useless projects by clicking on the "cross" icon locating at the uppper right corner of the project module. By clicking on a project, users select this project to upload medical record images to and the page direct the user to a page allows users to upload images of medical records.

# Upload Images

Users can click on the "add" icon to upload an image of medical records. After clicking on "submit" button, the images are processed in the backend and users are re-directed to the page to confirm information of the OCR algorithm.

# Confirm OCR Results

Attributes extracted from the OCR algorithm is displayed on the left side. Users can delete useless attributes by clicking on the "minus" icon besides the attributes, or add new attributes using the "add" icon on the right side of the page.

# Troubleshooting

Firebase disconnection is common when running the backend due to the limited stability of free Firebase.

Google vision API takes relatively long for medical record images containing long information because the free version is limited in speed.

# Future work

In the future, the OCR would be able to scan and digitalize more than one images of medical records, and append the information on multiple pages.

Google vision API has limited effects in identifying checkboxes. For future work, other OCR API or lib will be used to idenfity checkboxes.

Currently, if users want to alter an attribute (EG: changing "age: 22" to "age: 21") on the page to confirm OCR results, it is required to delete and re-add the attributes with the correct content. For future work, users should be able to input the changes directly.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
