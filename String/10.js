// Поиск без учета регистра
// Напишите функцию insensitiveSearch(str1, str2),
// которая осуществляет поиск подстроки str2 в строке str1
// без учёта регистра символов.

function insensitiveSearch(str1, str2) {
  return str1.toLowerCase().includes(str2.toLowerCase());
}

console.log(insensitiveSearch('string', 'StRiNg')); // true
console.log(insensitiveSearch('ABCDe', 'AbcdW')); // false
