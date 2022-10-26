// Переверните число задом наперед
// Напишите функцию, которая переворачивает число.

function reverseNumber(n) {
  return +String(n).split('').reverse().join('');
}

console.log(reverseNumber(258961)); // 169852
