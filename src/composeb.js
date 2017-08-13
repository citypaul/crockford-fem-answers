module.exports = (binA, binB) => (a, b, c) => binB(binA(a, b), c);
