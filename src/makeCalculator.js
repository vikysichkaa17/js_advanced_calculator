'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    add(num) {
      return calculator.result + num;
    },

    subtract(num) {
      return calculator.result - num;
    },

    multiply(num) {
      return calculator.result * num;
    },

    divide(num) {
      calculator.result /= num;

      return calculator.result;
    },

    operate(callback, number) {
      calculator.result = callback(number);

      return calculator;
    },

    reset() {
      calculator.result = 0;

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
