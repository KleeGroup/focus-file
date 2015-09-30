const prodConfBuilder = require('webpack-focus').productionConfig;
const focusFileConf = require('./focus-file-webpack.config');
focusFileConf.externals = {
    'focus-core': 'FocusCore',
    react: 'React'
};
const prodConf = prodConfBuilder(focusFileConf);
module.exports = prodConf;
