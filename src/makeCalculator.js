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
      return calculator.result / num;
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
