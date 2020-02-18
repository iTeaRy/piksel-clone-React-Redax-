import { createReducer } from 'redux-action';

import {
    SAVE_IMAGE_ACTION,
    CREATE_NEW_FRAME,
    UPDATE_FRAME,
    CHANGE_FRAME,
    CHANGE_FPS
} from '../constants/frames';

import { createUniqueId } from '../utils/FrameUtils';

const firstFrame = {
    data: null,
    id: createUniqueId()
};

const initialState = {
    data: [firstFrame],
    fps: 1,
    isNewFrame: false,
    currentFrameId: firstFrame.id
};

export default createReducer(initialState, {
    [SAVE_IMAGE_ACTION]: (frameData, state) => {
        const currentFrameArray = state.data.filter(item => item.id === state.currentFrameId);
        const currentFrame = currentFrameArray && currentFrameArray.length > 0 ? currentFrameArray[0] : null;
        if (currentFrame) currentFrame.data = frameData.data;
        const newData = [];
        state.data.forEach(item => {
            if (item.id === state.currentFrameId) {
                newData.push(currentFrame);
            } else {
                newData.push(item);
            }
        });
        return {
            data: newData
        };
    },
    [CREATE_NEW_FRAME]: (data, state) => {
        const newId = createUniqueId();
        const newFrames = [...state.data, { data: null, id: newId} ];
        return {
            ...state,
            data: newFrames,
            isNewFrame: true,
            currentFrameId: newId
        };
    },
    [UPDATE_FRAME]: (data, state) => {
        return {
            ...state,
            isNewFrame: false
        };
    },
    [CHANGE_FPS]: (fps, state) => {
        return {
            ...state,
            fps
        };
    },
    [CHANGE_FRAME]: (id, state) => {
        return {
            ...state,
            currentFrameId: id,
            isNewFrame: true
        };
    },
});
