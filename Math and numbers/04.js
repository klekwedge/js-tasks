// Генерировать случайное целое число
// Напишите функцию для генерации случайного целого числа.

function random(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

console.log(random(1, 10)); // 9
console.log(random(6, 22)); // 8
