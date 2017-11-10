import React, { PropTypes, PureComponent } from 'react';
import moment from 'moment';
import { merge } from 'lodash';
//import fetch from 'focus-core/network/fetch';
import { get as configGetter } from 'focus-core/network//config';

import Button from 'focus-components/components/button';

import DevComponent from './devcomponent';

import fileService from '../../services/file';

const propTypes = {
    params: PropTypes.object.isRequired
};

const fileUploadUrl = `${__API_ROOT__}` + 'file/upload';

const myFileFetch = (url, fd) => {
    const { CORS, isCORS, xhrErrors, ...config } = configGetter();
    const reqOptions = merge({ headers: {} }, config, { method: 'POST', body: fd });
    fetch(
        url,
        reqOptions
    ).then((data) => {
        console.log(data);
    });
};

const DisplaySelectedImageFiles = ({ files }) => {
    return (
        <div>
            {files.length > 0 &&
                <table className='mdl-data-table mdl-js-data-table' data-vision='table'>
                    <thead>
                        <tr>
                            <th style={{ width: '15%' }}>{'Name'}</th>
                            <th style={{ width: '5%' }}>{'Size'}</th>
                            <th style={{ width: '80%' }}>{'Image'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {files.map(({ size, name, data }, idx) => {
                            return (
                                <tr key={name + '-' + idx}>
                                    <td style={{ width: '15%' }}><strong>{name}</strong></td>
                                    <td style={{ width: '5%' }}>{(size / 1024).toFixed(1) + ' Ko'}</td>
                                    <td style={{ width: '80%' }}><div><img src={data} /></div></td>
                                </tr>);
                        })}
                    </tbody>
                </table>}
        </div>
    );
};
DisplaySelectedImageFiles.propTypes = {
    files: PropTypes.array.isRequired
};

const DisplaySelectedTextFile = ({ files }) => {
    const { size, name, lastModified } = files[0] || { size: 0, name: 'Aucun fichier', lastModified: '' };
    return (
        <div>
            <strong>{name}</strong>
            {' (' + (size / 1024).toFixed(1) + 'Ko) '}
            <em>{lastModified && moment(lastModified).format('ll')}</em>
        </div>
    );
};
DisplaySelectedTextFile.propTypes = {
    files: PropTypes.array.isRequired
};


class ExampleApp extends PureComponent {

    constructor(props) {
        super(props);
    }

    uploadFunction(stuff) {
        return fileService.uploadFile(stuff);
    }

    sendFile(files) {
        const url = fileUploadUrl;
        const fd = new FormData();
        fd.append('upfile', files[0]);
        myFileFetch(url, fd);
    }

    sendImageFiles(files) {
        const url = fileUploadUrl + '/list';
        const fd = new FormData();
        files.forEach((f, idx) => {
            fd.append('file-' + idx, f);
        });
        myFileFetch(url, fd);
    }

    render() {
        return (
            <div>
                <DevComponent uploadFunction={this.sendImageFiles} accept={'image/*'} isReadable DisplaySelectedFiles={DisplaySelectedImageFiles} />
                <br /><br /><br /><br />
                <DevComponent uploadFunction={this.sendFile} maxFiles={1} accept={'text/*'} DisplaySelectedFiles={DisplaySelectedTextFile}
                    DisplayChooseFile={Button} DisplayUploadFile={Button}
                />
            </div>
        );
    }
}

DevView.propTypes = propTypes;


export default ExampleApp;
