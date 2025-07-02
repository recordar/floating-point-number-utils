import Big from "big.js";

const multiply = (a: number, b: number) => {
  return Big(a).times(b).toNumber();
};

const divide = (a: number, b: number) => {
  return Big(a).div(b).toNumber();
};

const add = (a: number, b: number) => {
  return Big(a).plus(b).toNumber();
};

export { multiply, divide, add };
