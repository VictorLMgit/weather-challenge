const express = require('express');
const bodyParser = require('body-parser');
const weatherRoutes = require("./weatherRoutes.js"); 
const cors = require('cors');

const routes = (app) => {

    app.set('trust proxy', true);
    app.use((req, res, next) => {
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
    })
    app.use(cors());
    app.use(bodyParser.json());
    app.use("/api/forecast", weatherRoutes);

}

module.exports = routes;