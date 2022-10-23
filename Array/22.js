// Найти все значения данного свойства в массиве объектов
// Напишите функцию propertyValue(array, key), которая принимает в качестве
// аргументов массив объектов и имя свойства, а затем возвращает все значения
// данного свойства из массива объектов.

const litmir = [
  { author: 'Хэленка', title: 'Улетела сказка' },
  { author: 'Коул Кресли', title: 'Восстание Аркан' },
  { author: 'Райчел Мид', title: 'Золотая лилия' },
];

function propertyValue(array, key) {
  return array.map((item) => item[key]).join(' ');
}

console.log(propertyValue(litmir, 'title')); // Улетела сказка Восстание Аркан Золотая лилия
console.log(propertyValue(litmir, 'author')); // Хэленка Коул Кресли Райчел Мид
