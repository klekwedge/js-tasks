// Найти множители положительного целого числа.
// Напишите функцию для вычисления множителей положительного целого числа.

function factors(n) {
  const dividers = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      dividers.push(i);
    }
  }

  dividers.push(n);
  return dividers;
}

console.log(factors(18)); // [1, 2, 3, 6, 9, 18]
console.log(factors(19)); // [1, 19]
console.log(factors(20)); // [1, 2, 4, 5, 10, 20]
