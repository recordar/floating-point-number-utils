import Big from "big.js";
const multiply = (a, b) => {
    return new Big(a).times(b).toNumber();
};
const divide = (a, b) => {
    return new Big(a).div(b).toNumber();
};
const add = (a, b) => {
    return new Big(a).plus(b).toNumber();
};
export { multiply, divide, add };
