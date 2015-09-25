//Dependencies
import React, {Component, PropTypes} from 'react';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import './style/index.scss';
import builtInStore from '../store/built-in-store';
import uuid from 'uuid';
import {dispatcher} from 'focus-core';

const propTypes = {
    withCredentials: PropTypes.bool,
    style: PropTypes.object,
    url: PropTypes.string,
    paramName: PropTypes.string,
    previewTemplate: PropTypes.string,
    removalTimeout: PropTypes.number,
    store: PropTypes.object
};

const defaultProps = {
    paramName: 'upfile',
    removalTimeout: 1500,
    headers: {
        'Cache-Control': null
    },
    store: builtInStore
};

/**
* Component use for uploading files.
*/
class FileUploadZone extends Component {
    constructor(props) {
        super(props);
        const state = {
            dragging: false,
            fileId: uuid.v4()
        };
        this.state = state;
    }

    /**
    * Component did mount
    */
    componentDidMount(){
        const {fileId} = this.state;
        this.dropzone = new Dropzone(`div[data-file-upload='${fileId}']`, this.props);
        this.dropzone.on('complete', this._onFileComplete);
    }

    _onFileComplete = file => {
        const {removalTimeout, store} = this.props;
        setTimeout(() => {
            this.dropzone.removeFile(file);
        }, removalTimeout);
        const files = store.getFiles() || [];
        files.push(file);
        dispatcher.handleServerAction({
            data: {files},
            type: 'update'
        });
    }

    /**
    * Render the component
    * @return {JSX} The rendered component
    */
    render() {
        const {fileId} = this.state;
        return (
            <div className='dropzone dz-clickable' data-focus='file-upload'>
                <div data-file-upload={fileId} data-focus='file-upload-dropzone'></div>
            </div>
        );
    }
}

FileUploadZone.displayName = 'FileUploadZone';
FileUploadZone.defaultProps = defaultProps;
FileUploadZone.propTypes = propTypes;

export default FileUploadZone;
