"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var projectConstant = require("./Util/constant.tsx");
var upload = require("./Controller/multer.tsx");
function setupServer() {
    var app = express();
    app.use(cors());
    app.post("/upload", upload.uploadFile.array("medical", 12), function (req, res) {
        console.log(req.files);
    });
    app.listen(projectConstant.PORT, function () {
        return console.log("App listening on port " + projectConstant.PORT + "!");
    });
}
exports["default"] = setupServer;
