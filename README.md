# Authors

Jiaxuan Chen, Chenyu Dai, Shuge Fan, Michael Oh-Yang, Peiqi Zhao

# Workflow

[![Build and Test React OCR FrontEnd](https://github.com/michaelohyang/OCR-web/actions/workflows/client.yml/badge.svg)](https://github.com/michaelohyang/OCR-web/actions/workflows/client.yml)
[![Build and Test React OCR Backend](https://github.com/michaelohyang/OCR-web/actions/workflows/server.yml/badge.svg)](https://github.com/michaelohyang/OCR-web/actions/workflows/server.yml)

# About

This is a web application that aids researchers and researcher assistants in uploading, storing, and organizing images of medical records. Images of medical records would be transferred to machine encoded digital texts using Optical Character Recognition algorithms and stored in a cloud database (Firebase).

# Environment

```
- MAC Environment
- Window Environment
```
# Dependent libraries

Please Download NODE.js from https://nodejs.org/en/ and NPM from https://www.npmjs.com/, and follow the instructions on the webpage.
Run "npm -v" and "node -v" to check the npm and node verions after installation. Please ensure that your node version is above v14 and your npm version is above v6.

# Installation

```
- Frontend: Please refer to the FE_README.md file in the Frontend directory
- Backend: Please refer to the BE_README.md file in the Backend directory
```

# User Navigation

Users are first lead to the home page displaying all the existing projects (Each project represents a different client). By clicking on the project modal, you are able to view the existing medical projects for that individual.

# Project

Users can create new medical research project by clicking on the modal with a "add" icon. It is required to input project name, description, and priority (Priority represents the importance of the medical research. For future work, the projects displayed on the home page will have different colors. Red represents high priority; yellow represents medium priority; and green represents low priority).

Users can delete useless projects by clicking on the "cross" icon locating at the upper right corner of the project modal. By clicking on a project, users can view existing medical records and/or upload medical record images for the OCR algorithm. 

# Upload Images

Users can click on the "add" icon to upload an image of medical records. After clicking on the "submit" button, the images are processed in the backend and users are re-directed to the page to confirm information of the parsed texts.

# Confirm OCR Results

Attributes extracted from the OCR algorithm is displayed on the left side. Users can delete useless attributes by clicking on the "minus" icon beside the attributes, or add new attributes by using the "add" icon on the right side of the page.

# Troubleshooting

Firebase disconnection is common when running the backend due to the limited stability of free Firebase.

Google vision API takes relatively long for medical record images containing long information because the free version is limited in speed.

# Future work

In the future, the OCR would be able to scan and digitize more than one images of medical records, and append the information on multiple pages.

Google vision API has limited effects in identifying checkboxes. For future work, other OCR API or libray will be used to identify checkboxes.

Currently, if users want to alter an attribute (eg: changing "age: 22" to "age: 21") on the ConfirmDigitalForm page, it is required to delete and re-add the attributes with the correct content. For future work, users should be able to change the input directly.
