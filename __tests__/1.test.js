const add = require('../src/add');
const sub = require('../src/sub');
const mul = require('../src/mul');
const identityF = require('../src/identityf');
const addF = require('../src/addf');
const liftF = require('../src/liftf');
const curry = require('../src/curry');
const curryAnyLength = require('../src/curry-any-length');
const inc1 = require('../src/inc-1');
const inc2 = require('../src/inc-2');
const inc3 = require('../src/inc-3');
const twice = require('../src/twice');
const reverse = require('../src/reverse');
const composeu = require('../src/composeu');
const double = twice(add);
const square = twice(mul);

describe('First question', () => {
  test('add', () => {
    expect(add(3, 4)).toEqual(7);
  });

  test('sub', () => {
    expect(sub(3, 4)).toEqual(-1);
  });

  test('mul', () => {
    expect(mul(3, 4)).toEqual(12);
  });
});

describe('Identityf', () => {
  test('function returns function that returns argument it recieves', () => {
    const three = identityF(3);
    expect(three()).toEqual(3);
  });
});

describe('addF', () => {
  test('function adds from two invocations', () => {
    expect(addF(3)(4)).toEqual(7);
  });
});

describe('liftF', () => {
  test('function takes a binary function and makes it callable with two invocations', () => {
    const addF = liftF(add);
    expect(addF(3)(4)).toEqual(7);
    expect(liftF(mul)(5)(6)).toEqual(30);
  });
});

describe('curry', () => {
  test('should be able to curry binary functons', () => {
    const add3 = curry(add, 3);
    expect(add3(4)).toEqual(7);
    expect(curry(mul, 5)(6)).toEqual(30);
  });
});

describe('es6 curry for any number of parameters', () => {
  test('should be able to curry arbitrary numbers of parameters', () => {
    const testFunc = (one, two, three, four) => one + two + three + four;
    const partiallyCurried = curryAnyLength(testFunc, 1, 2);

    expect(curryAnyLength(partiallyCurried, 3)(4)).toEqual(10);
  });
});

describe('Without writing any new functions, show three ways to create the inc function', () => {
  test('1st', () => {
    expect(inc1(5)).toEqual(6);
    expect(inc1(inc1(5))).toEqual(7);
  });

  test('2nd', () => {
    expect(inc2(5)).toEqual(6);
    expect(inc2(inc2(5))).toEqual(7);
  });

  test('3rd', () => {
    expect(inc3(5)).toEqual(6);
    expect(inc3(inc3(5))).toEqual(7);
  });
});

describe(`Write a function 'twice' that takes a binary function and returns a unary function that passes its argument to the
binary function twice`, () => {
  test('works', () => {
    expect(square(11)).toEqual(121);
    expect(double(12)).toEqual(24);
  });
});

describe('Write `reverse`, a function that reverses the arguments of a binary function', () => {
  test('works', () => {
    const bus = reverse(sub);
    expect(bus(3, 2)).toEqual(-1);
  });
});

describe('Write a function `composeu` that takes two unary functions and returns a unary function that calls them both', () => {
  test('works', () => {
    expect(composeu(double, square)(5)).toEqual(100);
  });
});
