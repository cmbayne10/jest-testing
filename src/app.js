export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  return a / b;
}
function fizzbuzz(a) {
  it("fizz buzz returns 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
  it("fizz buzz returns fizz", () => {
    expect(fizzbuzz(5)).toEqual(fizz);
  });
  it("fizz buzz returns buzz", () => {
    expect(fizzbuzz(3)).toEqual(buzz);
  });
  
}
