// Максимальная дата из массива дат
// Напишите функцию, чтобы получить максимальную дату из массива дат.

function maxDate(arr) {
  const newArr = arr.map((item) => new Date(item));
  let minIndex = 0;
  let min = newArr[0];
  newArr.forEach((el, index) => {
    if (min > el) {
      minIndex = index;
    }
  });
  return minIndex;
}

console.log(maxDate(['2021/02/01', '2021/02/02', '2021/01/03'])); // 2021-01-02T21:00:00.000Z
