// Наиболее часто используемый элемент массива
// Напишите код, который находит наиболее часто используемый
// элемент массива.

const arr = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  const el = arr[i];
  if (obj[el]) {
    obj[el]++;
  } else {
    obj[el] = 1;
  }
}

const entriesObj = Object.entries(obj);

let indexMax = entriesObj[0][0];
let max = entriesObj[0][1];

entriesObj.forEach((item) => {
  if (max < item[1]) {
    indexMax = item[0];
    max = item[1];
  }
});

console.log(`${indexMax} повторяется ${max} раз`);
