import { sum } from "../calculadora.js";

describe("calculadora sum", () => {
  test("dois valores positivos", () => {
    const result = sum(2,2);

    expect(result).toBe(4);
  });
});
