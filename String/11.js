// ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая
// преобразует стиль написания составных
// слов строки в CamelCase, при котором
// несколько слов пишутся слитно без пробелов,
// при этом каждое слово внутри строки пишется с заглавной буквы.

function initCap(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join('');
}

console.log(initCap('hEllo woRld')); // HelloWorld
