// Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая
// преобразует стиль написания составных слов строки
// из CamelCase в snake_case, при котором несколько слов
// разделяются символом подчеркивания (_), причём каждое
// слово пишется с маленькой буквы.

function initSnake(str) {
  return str
    .replace(/[A-Z]/g, function (match) {
      return '_' + match.toLowerCase();
    })
    .replace(/^_/, '');
}

console.log(initSnake('HelloWorld')); // hello_world
