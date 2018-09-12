module.exports = function solveEquation(equation) {
  let array = equation.split(" ");
  let a = parseInt(array[0]);
  let b = array[4] * parseInt(array[3] + 1);
  let c = array[8] * parseInt(array[7] + 1);
  let d = Math.pow(b, 2) - 4 * a * c;
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  let result = [];
  result.push(Math.round(x1));
  result.push(Math.round(x2));
  return result.sort((left, right) => left - right);
};
