const geoip = require('geoip-lite');
class WeaterConvert {

    static fahrenheitToCelsius(f) {
        return {
            celsius: ((f - 32)/9)*5,
            fahrenheit: f
        };
    }

    static cityByIP(ip){
        const geo = geoip.lookup(ip);
        return geo === null ? "Fortaleza" : geo.city;
    }

}

module.exports = WeaterConvert;