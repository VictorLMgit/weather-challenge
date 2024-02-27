const axios = require('axios');

class OpenWeather {
    static async weatherByCity(city){
        const url = process.env.URLOPENWEATHER + `q=${city}&units=metric&appid=${process.env.TOKEN}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
            return {
                erro: error.response.data
            }
        }
    }
}

module.exports = OpenWeather;

