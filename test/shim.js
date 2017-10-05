// Temporary fix
global.requestAnimationFrame = function (callback) { // eslint-disable-line
    setTimeout(callback, 0);
};
