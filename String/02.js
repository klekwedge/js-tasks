// Удаление указанного количества символов из строки
// Напишите функцию deleteCharacters(str, length), которая
// возвращает подстроку, состоящую из указанного количества символов.

function deleteCharacters(str, length) {
  if (length < 0 || length > str.length || typeof str !== 'string') {
    return null;
  }

  return str.slice(0, length);
}

const str = 'Каждый охотник желает знать';

console.log(deleteCharacters(str, 7)); // Каждый
