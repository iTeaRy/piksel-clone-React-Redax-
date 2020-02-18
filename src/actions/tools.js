import { createAction } from 'redux-action';

import {
    SET_TOOL_ACTION,
    SET_COLOR_ACTION,
    SET_PEN_SIZE_ACTION,
    SET_SECONDARY_COLOR_ACTION,
    REVERS_COLOR_ACTION,
    SET_CANVAS_SIZE_ACTION,
    UPDATED_CANVAS_SIZE_ACTION
} from '../constants/tools';
import {
    CREATE_NEW_FRAME,
    CHANGE_FRAME,
    CHANGE_FPS
} from '../constants/frames';

const updatedCanvasSize = createAction(UPDATED_CANVAS_SIZE_ACTION);
const changeCanvasSize = createAction(SET_CANVAS_SIZE_ACTION);
const setColor = createAction(SET_COLOR_ACTION);
const setSecondaryColor = createAction(SET_SECONDARY_COLOR_ACTION);
const reversColors = createAction(REVERS_COLOR_ACTION);
const setTool = createAction(SET_TOOL_ACTION);
const setPenSize = createAction(SET_PEN_SIZE_ACTION);
const createNewFrame = createAction(CREATE_NEW_FRAME);
const changeFrame = createAction(CHANGE_FRAME);
const changeFps = createAction(CHANGE_FPS);


class ToolsActions {
    setTool = tool => setTool(tool);
    setColor = color => setColor(color);
    setSecondaryColor = color => setSecondaryColor(color);
    setPenSize = penSize => setPenSize(penSize);
    reversColors = () => reversColors();
    createNewFrame = () => createNewFrame();
    changeFrame = id => changeFrame(id);
    changeFps = value => changeFps(value);
    changeCanvasSize = value => changeCanvasSize(value);
    updatedCanvasSize = () => updatedCanvasSize();

}

const instance = new ToolsActions();

export default instance;
