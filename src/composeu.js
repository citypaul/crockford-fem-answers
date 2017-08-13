module.exports = (unaryA, unaryB) => arg => unaryB(unaryA(arg));
