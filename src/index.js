module.exports = function solveEquation(equation) {
  let array = equation.split(" ");
  let a = parseInt(array[0]);
  let b = array[4] + perseInt(array[3] + 1);
  let c = array[8] + parseInt(array[7] + 1);
  let desc = sqrt(b) - 4 * a * c;
};
