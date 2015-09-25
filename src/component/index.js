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

    /**
     * Component did mount
     */
    componentDidMount(){
        const {fileId} = this.state;
        // const {template} = this.props;
        this.dropzone = new Dropzone(`div[data-file-upload='${fileId}']`, this.props);
    }
    /**
     * Render the component
     * @return {JSX} The rendered component
     */
    render() {
        const {style} = this.props;
        const {fileId} = this.state;
        return (
            <div className='dropzone dz-clickable' data-focus='file-upload'>
                <div data-file-upload={fileId} style={style}></div>
            </div>
        );
    }
}

FileUploadZone.displayName = 'FileUploadZone';
FileUploadZone.defaultProps = defaultProps;
FileUploadZone.propTypes = propTypes;

export default FileUploadZone;
