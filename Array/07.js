// Отобразить элементы в случайном порядоке
// Используя метод sort перепишите предсталенный ниже код,
// который с помощью цикла for случайно изменяет порядок
// расстановки элементов массива.

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

// function shuffle() {
//   return 0.5 - Math.random();
// }

// array.sort(shuffle);

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(array)); // [5, 4, 7, 6, 0, 3, 1, 2, 9, 8]
