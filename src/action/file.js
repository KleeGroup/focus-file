import {loadFileFromUrl, saveFile} from '../service/file';
import { application } from 'focus';
let actionBuilder = application.actionBuilder;
export const save = actionBuilder({
    service: loadFileFromUrl,
    node: 'account',
    status: 'loaded'
});
