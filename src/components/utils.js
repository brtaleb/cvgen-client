export const autosize = (event) => {
    let el = event.target;
    setTimeout(() => {
        el.style.cssText = 'height: 12px';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
};