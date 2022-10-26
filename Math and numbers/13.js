// Проверьте, является ли число степенью двойки
// Напишите функцию, чтобы проверить, является ли число степенью двойки.
// Примечание:
// Последовательность чисел, первое из которых равно 1, а каждое последующее вдвое больше: 1, 2, 4, 8, 16, ... можно записать в эквивалентном виде: 20, 21, 22, 23, 24, ... Называется она: последовательность степеней двойки.
// Никаких отрицательных чисел и дробей.

function powerOf2(n) {
  if (n < 1 || !Number.isInteger(n)) {
    return false;
  }
  else if(n===1){
    return true
  }

  while (n / 2 !== 1) {
    n /= 2;
    if (n % 2 !== 0) {
      return false;
    }
  }
  return true;
}

console.log(powerOf2(15)); // false
console.log(powerOf2(-20)); // false
console.log(powerOf2(18.22)); // false
console.log(powerOf2(2)); // true
console.log(powerOf2(256)); // true
console.log(powerOf2(521)); // false
console.log(powerOf2(3)); // false
console.log(powerOf2(1)); // true
