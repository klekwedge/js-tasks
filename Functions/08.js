// Получить тип данных
// Напишите функцию detectDataType(value), которая принимает
// аргумент и возвращает тип.
// Примечание. Существует шесть возможных значений, которые
// возвращает typeof: объект, логическое значение, функция, число,
// строка и неопределенное значение.

function detectDataType(value) {
  return typeof value;
}

console.log(detectDataType(51)); // number
console.log(detectDataType('hello')); // string
console.log(detectDataType({})); // object
console.log(detectDataType([])); // object
console.log(detectDataType(function () {})); // function
console.log(detectDataType(undefined)); // undefined
console.log(detectDataType(true)); // boolean
