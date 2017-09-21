import { CoreStore } from 'focus-core/store';

/**
* Store dealing with files.
* @type {focus}
*/
const FileStore = new CoreStore({
    definition: {
        files: 'files'
    }
});

FileStore.name = 'FileStore';


export default FileStore;
