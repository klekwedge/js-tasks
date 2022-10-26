// Проверьте, является ли число простым или нет
// Напишите функцию testPrime(n), которая принимает число в качестве
// параметра и проверяет, является ли число простым или нет.
// Примечание. Простое число (или простое число) - это натуральное
// число больше 1, не имеющее положительных делителей, кроме 1 и самого себя.

function testPrime(n) {
  for (let i = 2; i < n - 2; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(testPrime(51)); // false
console.log(testPrime(1)); // true
console.log(testPrime(9)); // false
console.log(testPrime(101)); // true
