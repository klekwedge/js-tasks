// Сортировка массива объектов
// Напишите код, который отсортирует массив объектов litmir
// по значению свойства title.

const litmir = [
  { author: 'Хэленка', title: 'Улетела сказка' },
  { author: 'Коул Кресли', title: 'Восстание Аркан' },
  { author: 'Райчел Мид', title: 'Золотая лилия' },
];

function compare(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}

console.log(litmir.sort(compare).map((item) => item.title).join(' ')); 
// Восстание Аркан Золотая лилия Улетела сказка
