// Найдите второе наименьшее и второе наибольшее числа из массива
// Напишите функцию secondGreatestLowest(arrNum),
// которая будет принимать массив сохраненных чисел и
// находить второе наименьшее и второе наибольшее числа соответственно.

function secondGreatestLowest(arrNum) {
  arrNum.sort((a, b) => a - b);
  return `${arrNum[1]} ${arrNum[arrNum.length - 2]}`;
}

console.log(secondGreatestLowest([8, 9, 10, 11, 12])); // 9,11
