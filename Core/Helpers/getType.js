module.exports = (arg) => {
    return ({}).toString.call(arg).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
