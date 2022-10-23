// Общая стартовая подстрока в массиве строк
// Напишите функцию startingSubstring(arr), которая
// возвращает общую начальную подстроку в массиве строк.

const arr1 = ['Капуста', 'Капитал'];
const arr2 = ['Репа', 'Редиска'];

function startingSubstring(arr) {
  let res = '';
  arr.sort();
  const firstEl = arr[0];
  const lastEl = arr[arr.length - 1];

  for (let i = 0; i < firstEl.length; i++) {
    if (firstEl[i] && lastEl[i] && firstEl[i] === lastEl[i]) {
      res += firstEl[i];
    } else {
      break;
    }
  }
  return res;
}

console.log(startingSubstring(arr1)); // Кап
console.log(startingSubstring(arr2)); // Ре
