// Вставить тире между словами строки
// Напишите функцию insertDash(str), которая принимает строку 
// str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.

function insertDash(str) {
  str = str.replace(/\s+/g, '-')

  return str.toUpperCase();
}

const str = "HTML JavaScript PHP";

console.log(insertDash(str)); // HTML-JAVASCRIPT-PHP
