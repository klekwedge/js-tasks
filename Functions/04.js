// Вернуть переданную строку с буквами в алфавитном порядке
// Напишите функцию alphabetOrder(str), которая возвращает
// переданную строку с буквами в алфавитном порядке.
// Пример строки: 'alphabetical'
// Ожидаемый результат: 'aaabcehillpt'
// Предположим, что символы пунктуации и цифры не включены в переданную строку.

function alphabetOrder(str) {
  return str.split('').sort().join('')
}

console.log(alphabetOrder('alphabetical')); // aaabcehillpt
