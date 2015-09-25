//Dependencies.
import {store} from 'focus';
const CoreStore = store;

const definition = {
    files: 'files'
};

/**
* Class standing for the account relative data store.
*/
class FileStore extends CoreStore {
    constructor(conf = {definition}){
        super(conf);
    }
}

export default FileStore;
