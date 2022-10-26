// Получить имя функции
// Напишите функцию, чтобы получить имя функции.

function nameOfFunc() {
  return arguments.callee.name;
}

console.log(nameOfFunc());
