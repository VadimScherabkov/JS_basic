const expect = require('chai').expect;

const {
  z1,
  z2,
  x,
  y,
  calc,
  redemption,
  discount
} = require('../condition');

describe('Task 1 - y < 10', () => {

  it('z1 should equal expected value', () => {
    const ex = expect(z1);
    if (y < 10) ex.to.equal(x + y);
    else if (y > 10) ex.to.equal(x * y);
    else throw new Error('y is wrong');
  });

  it('z2 should equal expected value', () => {
    const ex = expect(z2);
    if (y < 10) ex.to.equal(x + y);
    else if (y > 10) ex.to.equal(x * y);
    else throw new Error('y is not defined');
  });

});

describe('Task 2 - operator', () => {

  it('task2 should equal expected value', () => {
    expect(calc("add", 6, 2)).to.equal(8);
    expect(calc("subtract", 5, 3)).to.equal(2);
    expect(calc("multiply", 3, 2)).to.equal(6);
    expect(calc("divide", 4, 2)).to.equal(2);
  });

});

describe('Task 3 - discount', () => {

  it('discount should equal expected value', () => {
    const ex = expect(discount);
    if (redemption - 351 < 0) ex.to.equal(0);
    else if (redemption - 1351 < 0) ex.to.equal(15);
    else if (redemption - 2701 < 0) ex.to.equal(30);
    else if (redemption - 6501 < 0) ex.to.equal(45);
  });

});