//Dependencies
import React, { Component } from 'react';
//import accountStoreInstance from './built-in-store';
//import {load} from './action/account';
import Dropzone from 'dropzone';
import uuid from 'uuid';

export default class FileUploadZone extends Component {

  constructor(props) {
      super(props);
      this.displayName = 'FileUploadZone';
      this.fileId = uuid.v4();
  }
  componentDidMount(){
      this.dropzone = new Dropzone(`div[data-file-upload='${this.fileId}']`, this.props);
  }
  render() {
      let {fileId} = this;
      let {style} = this.props;
      return (
          <div data-focus='file-upload'>
                <div data-file-upload={fileId} style={style}></div>
            </div>
      );
  }
}
