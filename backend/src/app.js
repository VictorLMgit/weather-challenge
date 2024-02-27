const express = require('express');
const app = express();
const routes = require("./routes/index.js");

routes(app);
module.exports = app;