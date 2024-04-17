import { add, subtract, multiply, divide, fizzbuzz, fizzbuzzTo } from "./app";

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual();
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
  xit("loop exercise", () => {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  });
  it("fizzbuzzTo returns list of one", () => {
    const result = fizzbuzzTo(1);
    expect(result).toEqual([1]);
  });
  it("fizzbuzzTo returns list of 20", () => {
    const result = fizzbuzzTo(2);
    expect(result).toEqual([1, 2]);
  });

  it("fizzbuzzTo returns a list of three", () => {
    const result = fizzbuzzTo(3);
    expect(result).toEqual([1, 2, "fizz"]);
  });

  it("fizzbuzzTo returns a list of 5", () => {
    const result = fizzbuzzTo(5);
    expect(result).toEqual([1, 2, "fizz", 4, "buzz"]);
  });

  it("fizzbuzzTo returns a list of 15", () => {
    const result = fizzbuzzTo(15);
    expect(result).toEqual([
      1,
      2,
      "fizz",
      4,
      "buzz",
      "fizz",
      7,
      8,
      "fizz",
      "buzz",
      11,
      "fizz",
      13,
      14,
      "fizzbuzz",
    ]);
  });
});

//expect.anything(),{
//matches anything but null or undefined,
//You can use it inside toEqual/toHaveBeenCalledWith instead of a value,
//}

//.toHaveReturned(),{
//If you have a mock function, you can use .toHaveReturned
//to test that the mock function successfully returned
//(did not throw an error),
//}
