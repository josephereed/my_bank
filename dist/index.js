"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var express = require("express");
var path = require("path");
require('dotenv').config();
require('./routes');
require('./models');
// Server
var app = express();
var PORT = process.env.PORT || 5000;
// Middlewares
app.use(express.static(path.join(__dirname, '../src/client/build')));
app.use(express.json());
app.listen(PORT, function () {
    console.log("App is listening on " + PORT);
});
