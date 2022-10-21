// Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который
// сравнивает подстроку str1 с окончанием исходной
// строки str и определяет заканчивается ли строка символами подстроки.

const str = 'Каждый охотник желает знать';
const str1 = 'скрипт';
const str2 = 'знать';

function endsWith(substring) {
  return this.substring(this.length - this.substring.length) === substring;
}

String.prototype = endsWith;

console.log(str.endsWith(str1)); // false
console.log(str.endsWith(str2)); // true
