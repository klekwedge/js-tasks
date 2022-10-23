// Замена регистра символов
// Напишите функцию, которая принимает строку в
// качестве аргумента и заменяет регистр каждого символа
// на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК»,
// то на выходе должен быть массив [кАжДыЙ оХоТнИк].

function removeDuplicates(arr) {
  return Array(...new Set(arr));
}

const arr = [
  'php',
  'php',
  'css',
  'css',
  'script',
  'script',
  'html',
  'html',
  'java',
];

console.log(removeDuplicates(arr)); // [ 'php', 'css', 'script', 'html', 'java' ]