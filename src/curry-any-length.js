module.exports = (func, ...args) => (...second) => func(...args, ...second);
