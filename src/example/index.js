import 'material-design-lite/material.min';
import 'material-design-lite/material.min.css';

import ReactDOM from 'react-dom';
import React from 'react';

import Example from './example';

document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.render(<Example />, document.getElementById('root'));
});
