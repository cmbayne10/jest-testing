import { add, subtract, multiply, divide, fizzbuzz, checkNumber } from "./app";

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts 2-1", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  it("multiplies 510948*25834", () => {
    expect(multiply(510948, 25834)).toEqual(13199830632);
  });
  it("divide 2442468/4", () => {
    expect(divide(2442468, 4)).toEqual(610617);
  });
  it("fizzbuzz returns 1", () => {
    const extracted = fizzbuzz(1);
    expect(extracted).toEqual(1);
  });
  it("checknumber decides if fizz/buzz", () => {
  const checkNumber = (n) => {
    if (n % 3 === 0) {
      console.log("fizz");
    } else (n % 5 === 0); {
      console.log("buzz");
    }
  }});
  checkNumber(20);
  checkNumber(9);

});


