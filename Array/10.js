// Сумма элементов двух массивов
// Напишите код, который создаёт массив элементов представляющих
// собой сумму соответствующих элементов заданных массивов.

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6];

let res = [];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr2[i]);
  if (arr2[i] !== undefined) {
    res.push(arr1[i] + arr2[i]);
    continue;
  }
  res.push(arr1[i]);
}

console.log(res); // [ 5, 7, 9, 4, 5 ]