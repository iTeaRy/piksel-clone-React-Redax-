export const rgbaToCssFormat = data => {
    const {r, g , b, a} = data;
    return `rgba(${r},${g},${b},${a})`;
};

export const findPos = obj => {
    let current_left = 0, current_top = 0;
    if (obj.offsetParent){
        do{
            current_left += obj.offsetLeft;
            current_top += obj.offsetTop;
        }while(obj === obj.offsetParent);
        return {x: current_left, y: current_top};
    }
    return undefined;
};
