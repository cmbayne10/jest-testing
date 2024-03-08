import { add, subtract, multiply, divide } from "./app";

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
 
});
