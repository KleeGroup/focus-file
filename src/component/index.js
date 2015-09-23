//Dependencies
import React, {Component, PropTypes} from 'react';
import Dropzone from 'dropzone';
import uuid from 'uuid';

const propTypes = {
    withCredentials: PropTypes.bool,
    style: PropTypes.object,
    url: PropTypes.string,
    previewTemplate: PropTypes.string
};

const defaultProps = {
    withCredentials: true,
    previewTemplate: '<div>test</div>'
};

/**
* Component use for uploading files.
*/
class FileUploadZone extends Component {
    constructor(props) {
        super(props);
        const state = {
            fileId: uuid.v4()
        };
        this.state = state;
    }

    /** @inheritdoc */
    componentDidMount(){
        const {fileId} = this.state;
        const {template} = this.props;
        this.dropzone = new Dropzone(`div[data-file-upload='${fileId}']`, this.props);
    }
    /** @inheritdoc */
    render() {
        const {style} = this.props;
        const {fileId} = this.state;
        return (
            <div data-focus='file-upload' className='dropzone dz-clickable'>
                <div data-file-upload={fileId} style={style}></div>
            </div>
        );
    }
}

FileUploadZone.displayName = 'FileUploadZone';
FileUploadZone.defaultProps = defaultProps;
FileUploadZone.propTypes = propTypes;

export default FileUploadZone;
