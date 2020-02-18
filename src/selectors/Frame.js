export const getCurrentFrame = state => {
    const array = state.data.filter(item => item.id === state.currentFrameId);
    return array && array.length > 0 ? array[0] : null;
};
