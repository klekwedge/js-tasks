// Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos),
// которая возвращает часть строки, расположенную
// после или до указанного символа char в зависимости от параметра pos.

const str = 'Астрономия — Наука о небесных телах';

function getSubstr(str, char, pos) {
  if (pos === 'after') {
    return str.slice(str.indexOf(char) + 1);
  } else if (pos === 'before') {
    return str.slice(0, str.indexOf(char));
  } else {
    return str;
  }
}

console.log(getSubstr(str, '—', 'after')); // Наука о небесных телах
console.log(getSubstr(str, 'Н', 'before')); // Астрономия —
