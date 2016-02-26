const configBuilder = require('webpack-focus').configBuilder;
const customConfig = {
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        moment: 'moment',
        lodash: 'lodash',
        dropzone: 'Dropzone'
    }
}

module.exports = configBuilder(customConfig);
