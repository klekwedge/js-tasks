// Количество повторяющихся элементов в массиве
// Напишите функцию countIdentic(arr), которая возвращает количество
// повторяющихся элементов в массиве.

function countIdentic(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }
  return Object.entries(obj).filter((item) => item[1] > 1);
}

console.log(countIdentic([3, 3, 7, 7, 3, 3, 4, 5, 5, 8, 8, 8])); // 4
console.log(countIdentic([15, 14, 13, 19, 13, 14, 14, 14, 7, 9, 9])); // 3  
