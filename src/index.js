import React from 'react';
import App from './App';
let style = {
    border: '1px dotted tomato',
    height: '150px'
};
React.render(<App style={style} url='http://localhost:9998/upload'/>, document.getElementById('root'));
