//Dependencies.
import { store } from 'focus-core';
const { CoreStore } = store;

const definition = {
    files: 'files'
};

/**
* Class standing for the account relative data store.
*/
class FileStore extends CoreStore {
    constructor(conf) {
        conf = conf || {};
        conf.definition = conf.definition || definition;
        super(conf);
    }
}

export default FileStore;
