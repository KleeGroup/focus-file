//Dependencies
import React, {Component, PropTypes} from 'react';
import 'dropzone/dist/dropzone';
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
    store: PropTypes.object,
    onFileSuccess: PropTypes.func,
    onFileComplete: PropTypes.func
};

const defaultProps = {
    paramName: 'upfile',
    removalTimeout: 1500,
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
    componentDidMount() {
        const {fileId} = this.state;
        this.dropzone = new Dropzone(`div[data-file-upload='${fileId}']`, this.props);
        this.dropzone.on('complete', this._onFileComplete);
        this.dropzone.on('success', this._onFileSuccess);
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
        if(this.props.onFileComplete) {
            this.props.onFileComplete(file);
        }
    }

    _onFileSuccess = (file, response) => {
        if(this.props.onFileSuccess) {
            this.props.onFileSuccess(file, response);
        }
    }

    /**
    * Render the component
    * @return {JSX} The rendered component
    */
    render() {
        const {fileId} = this.state;
        return (
            <div data-focus='file-upload'>
                <div className='dropzone dz-clickable' data-file-upload={fileId} data-focus='file-upload-dropzone'>
                    <div className='dz-message needsclick'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

FileUploadZone.displayName = 'FileUploadZone';
FileUploadZone.defaultProps = defaultProps;
FileUploadZone.propTypes = propTypes;

export default FileUploadZone;
