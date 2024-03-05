import { add, subtract } from "./app";

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts 2-1", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
});
