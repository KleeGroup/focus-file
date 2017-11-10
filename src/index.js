import React, { Component, PropTypes } from 'react';
import { translate } from 'focus-core/translation';

const propTypes = {
    //Display component for choosing the file(s), otherProps are transmitted
    DisplayChooseFile: PropTypes.func,
    //Function given to DisplayChooseFile within the props 'label'
    labelChooseFile: PropTypes.func,
    //Display component for uploading the file(s), otherProps are transmitted
    DisplayUploadFile: PropTypes.func,
    //Function given to DisplayUploadFile within the props 'label'
    labelUploadFile: PropTypes.func,
    //Function given to DisplayUploadFile within the props 'uploadFunction',
    //If you use the default DisplayUploadFile, it is the onClick function with the files in argument
    uploadFunction: PropTypes.func.isRequired,
    //Display component for showing the selected file(s), an array of the file(s) is transmitted using the props 'files'
    DisplaySelectedFiles: PropTypes.func,
    //Set to true in order to manipulate the file(s) on the client side
    //For each file, the URL representing the file's data as a base64 encoded string is under the property 'data'
    isReadable: PropTypes.bool,
    //see https://developer.mozilla.org/en-US/docs/HTML/Element/input#attr-accept
    accept: PropTypes.string,
    //Maximum size of each file in Ko (default is 0 = no limit)
    maxFileSize: PropTypes.number,
    //Maximum number of files (default is 0 = no limit)
    maxFiles: PropTypes.number
};

const labelChooseSingle = 'file.choose.single';
const labelChooseList = 'file.choose.list';
const labelUpload = 'file.upload';

const DefaultDisplayChooseFile = ({ label, ...others }) => {
    return (
        <div>
            <button {...others}>{label}</button>
        </div>
    );
};
DefaultDisplayChooseFile.propTypes = {
    multiple: PropTypes.bool.isRequired,
    label: PropTypes.func.isRequired
};


const DefaultDisplaySelectedFiles = ({ files }) => {
    return (
        <div>
            {files.map(({ size, name }, idx) => {
                return (
                    <div key={name + '-' + idx}>
                        <strong>{name}</strong>
                        {' (' + (size / 1024).toFixed(1) + 'Ko)'}
                    </div>);
            })}
        </div>
    );
};
DefaultDisplaySelectedFiles.propTypes = {
    files: PropTypes.array.isRequired
};


const DefaultDisplayUploadFile = ({ label, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>
                {label}
            </button>
        </div>);
};
DefaultDisplayUploadFile.propTypes = {
    files: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.func.isRequired
};

const defaultProps = {
    DisplayChooseFile: DefaultDisplayChooseFile,
    DisplaySelectedFiles: DefaultDisplaySelectedFiles,
    DisplayUploadFile: DefaultDisplayUploadFile,
    labelChooseFile: (multiple) => translate(multiple ? labelChooseList : labelChooseSingle),
    labelUploadFile: () => translate(labelUpload),
    isReadable: false,
    accept: '',
    maxFileSize: 0,
    maxFiles: 0
};

class FocusFile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
        this.onFileEvent = this.onFileEvent.bind(this);
    }

    getFiles(e) {
        return Array.prototype.map.call(e.target.files || e.dataTransfer.files, (elt) => elt);
    }

    isValidFile(file, acceptedFiles, maxFileSize) {

        if (maxFileSize && file.size > maxFileSize * 1024) {
            console.warn(file.name, ' has been removed because its size (', file.size, ') is more than the maximum authorized (', maxFileSize * 1024, ')');
            return false;
        }

        //Taken from https://gitlab.com/meno/dropzone/blob/master/src/dropzone.js Dropzone.isValidFile = function (file, acceptedFiles)
        if (!acceptedFiles) {
            return true;
        } // If there are no accepted mime types, it's OK
        acceptedFiles = acceptedFiles.split(',');

        const mimeType = file.type;
        const baseMimeType = mimeType.replace(/\/.*$/, '');

        for (let validType of acceptedFiles) {
            validType = validType.trim();
            if (validType.charAt(0) === '.') {
                if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
                    return true;
                }
            } else if (/\/\*$/.test(validType)) {
                // This is something like a image/* mime type
                if (baseMimeType === validType.replace(/\/.*$/, '')) {
                    return true;
                }
            } else {
                if (mimeType === validType) {
                    return true;
                }
            }
        }
        console.warn(file.name, ' has been removed because its type (', mimeType, ') is not among the accepted type (', acceptedFiles, ')');
        return false;
    }

    control(files, acceptedFiles, maxFileSize, maxFiles) {

        const cleanFiles = files.filter((f) => {
            return this.isValidFile(f, acceptedFiles, maxFileSize);
        });

        if (maxFiles !== 0 && cleanFiles.length > maxFiles) {
            console.warn(cleanFiles.length + ' files accepted when the maximum number of files is set to ' + maxFiles + ' . Only the first ' + maxFiles + ' are taken into account.');
            cleanFiles.splice(0, cleanFiles.length - maxFiles);
        }
        return cleanFiles;
    }

    onFileEvent(e) {
        e.preventDefault();
        const files = this.getFiles(e);
        const { accept, maxFileSize, maxFiles } = this.props;
        this.putFilesInState(this.control(files, accept, maxFileSize, maxFiles));
    }

    preventDefault(e) {
        e.preventDefault();
    }

    putFilesInState(files) {
        this.setState({
            files
        });
        // Code for reading the files on the client side
        if (this.props.isReadable) {
            files.forEach((file, idx) => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    files[idx].data = reader.result;
                    this.setState({
                        files
                    });
                };
                reader.readAsDataURL(file);
            });
        }
    }

    render() {
        const { files } = this.state;
        const { DisplayChooseFile, DisplaySelectedFiles, DisplayUploadFile, uploadFunction, labelChooseFile, labelUploadFile, maxFiles, accept,
            isReadable, maxFileSize, ...otherProps } = this.props;
        const multiple = maxFiles !== 1;
        return (
            <div>
                <div>
                    <DisplaySelectedFiles files={files} />
                    <input hidden ref='input' type='file' onChange={this.onFileEvent} multiple={multiple} accept={accept} />
                    <DisplayChooseFile onClick={() => this.refs.input.click()}
                        multiple={multiple}
                        onDrop={this.onFileEvent}
                        onDragOver={this.preventDefault}
                        label={labelChooseFile(multiple)}
                        {...otherProps}
                    />
                </div>
                {files.length > 0 && <div><DisplayUploadFile files={files} onClick={() => uploadFunction(files)} label={labelUploadFile()} {...otherProps} /></div>}
            </div>
        );
    }
}

FocusFile.propTypes = propTypes;
FocusFile.defaultProps = defaultProps;

export default FocusFile;