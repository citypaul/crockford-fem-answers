const curry = require('./curry');
const add = require('./add');

module.exports = curry(add, 1);
