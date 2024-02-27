const express = require('express');
const router = express.Router();
const WeatherController = require("./../controller/weatherController.js");

router.get("/", WeatherController.getWeather);
router.get("/convert", WeatherController.convert);

module.exports = router;