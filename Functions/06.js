// Подсчитать количество гласных в строке
// Напишите функцию vowelCount(str), которая принимает строку
// в качестве параметра и подсчитывает количество гласных в строке.

function vowelCount(str) {
  let count = 0;
  str.replace(/[aeiou]/gi, function (letter) {
    count++;
    return letter;
  });

  return count;
}

console.log(vowelCount('Web Development Tutorial')); // 9
