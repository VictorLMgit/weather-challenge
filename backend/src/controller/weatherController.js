const utilities = require("../core/utilities.js");
const OpenWeather = require("./../services/openWeather.service.js");
class WeatherController {

    static async convert(req, res) {
        return res.status(200).json(utilities.fahrenheitToCelsius(req.body.fahrenheit));
    }

    static async getWeather(req, res) {
        try {
           
            const ip = req.ip|| req.connection.remoteAddress;
            const weatherStatus = await OpenWeather.weatherByCity(req.query.city !== undefined ? req.query.city : utilities.cityByIP(ip));
            if (weatherStatus.erro !== undefined){
                const error = new Error(weatherStatus.erro.message);
                error.code = weatherStatus.erro.cod;
                throw error;
            }
            return res.status(200).json(weatherStatus);
            
        } catch (error) {
            res.status(error.code).json({ erro: error.message });
        }
    }

}



module.exports = WeatherController;
