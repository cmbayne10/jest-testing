import { add, subtract, multiply, divide, fizzbuzz, fizzbuzzTo } from "./app";

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
  it("fizzbuzz returns 2", () => {
    const extracted = fizzbuzz(2);
    expect(extracted).toEqual(2);
  });
  it("passing 3 to fizzbuzz returns fizz", () => {
    const extracted = fizzbuzz(3);
    expect(extracted).toEqual("fizz");
  });
  it("passing 5 to fizzbuzz returns buzz", () => {
    const result = fizzbuzz(5);
    expect(result).toEqual("buzz");
  });
  it("passing 15 to fizzbuzz returns fizzbuzz", () => {
    const result = fizzbuzz(15);
    expect(result).toEqual("fizzbuzz");
  });
 
  it("refining fizzbuzz with fizzbuzzTo returns fizzbuzz", () => {
  const result = fizzbuzzTo(15);
  expect(result).toEqual(Array);
  });
});
