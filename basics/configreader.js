//if export NODE_ENV=production is set  reads the value from Production else default.
// or else process.env.NODE_ENV = "stage";
// config folder should be in root folder  Process.cwd() + '\config'
var config = require('config');
const path = require('path');
const process = require('process')
process.env.SUPPRESS_NO_CONFIG_WARNING = 'y'
const ourConfigDir = path.join(path.parse(__dirname).dir, 'config')
const baseConfig = config.util.loadFileConfigs(ourConfigDir)
config.util.setModuleDefaults('MyModule', baseConfig)
config = config['MyModule']

console.log('reading config value',   config.get('Customer.dbConfig.host'));

//checking for the optional config value
if (config.has('optionalFeature.detail')) {
    console.log(config.get('optionalFeature.detail'));

}