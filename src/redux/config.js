
const platform = 'local';

let settings = {};

if (platform == 'local') {
    settings = {
        api_url: 'http://api.gclout.com:3000/',
        country_url: "https://restcountries.eu/rest/v2/",
        state_url: "http://locationsng-api.herokuapp.com/api/v1/states",
        lga_url: "http://locationsng-api.herokuapp.com/api/v1/states",
        base_url: '',
        cloudinary_api_key: '152743228721868',
        cloudinary_secret_key: 'YDTl4jcJS_-P3BgP1Wg1BlwV61s',
        cloudinary_cloud_name: 'tribenigeria-com',
        app_name: 'Gclout',
        subject: 'Gclout'
    }
} else {
    settings = {
        api_url: 'http://api.gclout.com:3000/',
        country_url: "https://restcountries.eu/rest/v2/",
        state_url: "http://locationsng-api.herokuapp.com/api/v1/states",
        lga_url: "http://locationsng-api.herokuapp.com/api/v1/states",
        base_url: '',
        cloudinary_api_key: '152743228721868',
        cloudinary_secret_key: 'YDTl4jcJS_-P3BgP1Wg1BlwV61s',
        cloudinary_cloud_name: 'tribenigeria-com',
        app_name: 'Gclout',
        subject: 'Gclout'
    }
}



export default settings;