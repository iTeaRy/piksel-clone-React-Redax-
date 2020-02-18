import { createReducer } from 'redux-action';

import {
    PEN,
    SET_TOOL_ACTION,
    SET_COLOR_ACTION,
    SET_SECONDARY_COLOR_ACTION,
    SET_PEN_SIZE_ACTION,
    DEFAULT_COLOR,
    DEFAULT_SECONDARY_COLOR,
    REVERS_COLOR_ACTION,
    SET_CANVAS_SIZE_ACTION,
    CANVAS_SIZE_32,
    UPDATED_CANVAS_SIZE_ACTION
} from '../constants/tools';

const initialState = {
    tool: PEN,
    color: DEFAULT_COLOR,
    secondaryColor: DEFAULT_SECONDARY_COLOR,
    penSize: 1,
    size: CANVAS_SIZE_32,
    isNewSize: false
};

export default createReducer(initialState, {
    [SET_TOOL_ACTION]: (data, state) => {
        return {
            ...state,
            tool: data
        };
    },
    [SET_COLOR_ACTION]: (data, state) => {
        return {
            ...state,
            color: data
        };
    },
    [SET_SECONDARY_COLOR_ACTION]: (data, state) => {
        return {
            ...state,
            secondaryColor: data
        };
    },
    [REVERS_COLOR_ACTION]: (data, state) => {
        return {
            ...state,
            secondaryColor: state.color,
            color: state.secondaryColor,
        };
    },
    [SET_PEN_SIZE_ACTION]: (data, state) => {
        return {
            ...state,
            penSize: parseInt(data, 10)
        };
    },
    [SET_CANVAS_SIZE_ACTION]: (data, state) => {
        return {
            ...state,
            size: parseInt(data, 10),
            isNewSize: true,
        };
    },
    [UPDATED_CANVAS_SIZE_ACTION]: (data, state) => {
        return {
            ...state,
            isNewSize: false,
        };
    },
});
