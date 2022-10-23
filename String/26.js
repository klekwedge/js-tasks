// Удаление слов-дубликатов из строки
// Напишите функцию removeDuplicate(str),
// которая возвращает строку, очищенную от слов-дупликатов,
// т.е. каждое слово должно повторяться не более одного раза.

function removeDuplicate(str) {
  return Array(...new Set(str.split(', '))).join(', ')
}

const str = 'вишня, груша, слива, груша';
console.log(removeDuplicate(str)); // вишня, груша, слива
