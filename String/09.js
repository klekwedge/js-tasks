// Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая
// сравнивает строки без учёта регистра символов.

function comparison(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparison('string', 'StRiNg')); // true
console.log(comparison('ABCDe', 'AbcdW')); // false
