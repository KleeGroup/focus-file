//Dependencies
import React, { Component } from 'react';
import fileStore from './built-in-store';
import {load, save} from './action/file';
import FileUploadZone from './component'


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
          </div>
      );
  }
}
