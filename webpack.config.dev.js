const devConfBuilder = require('webpack-focus').devConfig;
const focusFileConf = require('./focus-file-webpack.config');
const devConf = devConfBuilder(focusComponentsConf);
module.exports = devConf;
