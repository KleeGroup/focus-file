//Dependencies
import React, { Component } from 'react';
//import accountStoreInstance from './built-in-store';
//import {load} from './action/account';
import Dropzone from 'dropzone';
import uuid from 'uuid';
import {component} from 'focus';
let type = component.types;
/**
 * Component use for uploading files.
 */
export default class FileUploadZone extends Component {
  /** @inheritdoc */
  constructor(props) {
      super(props);
      this.displayName = 'FileUploadZone';
      this.fileId = uuid.v4();
  }
  /** @inheritdoc */
  componentDidMount(){
      this.dropzone = new Dropzone(`div[data-file-upload='${this.fileId}']`, this.props);
  }
  /** @inheritdoc */
  getDefaultProps(){
      return {
          withCredentials: true
      };
  }
  /** @inheritdoc */
  propTypes(){
      return {
          withCredentials: type('bool'),
          style: type('object')
      };
  }
  /** @inheritdoc */
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
