import { createAction } from 'redux-action';

import {
    SAVE_IMAGE_ACTION,
    UPDATE_FRAME
} from '../constants/frames';

const saveImage = createAction(SAVE_IMAGE_ACTION);
const updateFrame = createAction(UPDATE_FRAME);

class FramesActions {

    saveImage = data => saveImage(data);
    updateFrame = () => updateFrame();

}

const instance = new FramesActions();

export default instance;
