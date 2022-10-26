// Проверьте, является ли переданная строка палиндромом или нет
// Напишите функцию, которая проверяет, является ли переданная
// строка палиндромом? Палиндром - это слово, фраза или
// последовательность, которые читаются так же, как вперед,
// назад, например, level.

function checkPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(checkPalindrome('level')); // true
console.log(checkPalindrome('topot')); // true
console.log(checkPalindrome('that')); // false
