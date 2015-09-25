//Dependencies
import React, { Component } from 'react';
import fileStore from './built-in-store';
import {load, save} from './action/file';
import FileUploadZone from './component';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'FileExample';
    }
    render() {
        return (
            <div>
                <h1>file upload</h1>
                <FileUploadZone {...this.props}/>
                <button className='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored'><i className='material-icons'>add</i></button>
            </div>
        );
    }
}
