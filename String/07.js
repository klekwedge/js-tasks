// Удалить все не буквенно-цифровые символы
// Напишите функцию removeChar(str), которая
// возвращает строку, очищенную от всех не буквенно-цифровых символов.

function removeChar(str) {
  return str.replace(/\W+/g, ' ');
}

const str = 'every., -/ hunter #! wishes ;: {} to $ % ^ & * know';

console.log(removeChar(str)); // every hunter wishes to know
