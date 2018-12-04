//if export NODE_ENV=production is set  reads the value from Production else default.
// or else process.env.NODE_ENV = "stage";
var config = require('config');
console.log('reading config value',   config.get('Customer.dbConfig.host'));

//checking for the optional config value
if (config.has('optionalFeature.detail')) {
    console.log(config.get('optionalFeature.detail'));

}