function sumFor(numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

function sumWhile(numbers) {
  let i = 0;
  let total = 0;
  while (i < numbers.length) {
    total += numbers[i];
    i++;
  }
  return total;
}

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
}

const array = [1, 2, 3, 4];
console.log(sumFor(array));
console.log(sumWhile(array));
console.log(sumRecursion(array));
console.log(sumTheSimpleWay(array));
