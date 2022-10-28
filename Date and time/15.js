// Получите квартал года
// Напишите функцию, чтобы получить квартал (с 1 по 4) года.

function quarterYear(date) {
  switch (date.getMonth()) {
    case 0:
    case 1:
    case 2:
      return 1;
    case 3:
    case 4:
    case 5:
      return 2;
    case 6:
    case 7:
    case 8:
      return 3;
    case 9:
    case 10:
    case 11:
      return 4;
  }

  // const month = date.getMonth() + 1;
  // return Math.ceil(month / 3);
}

console.log(quarterYear(new Date(2021, 1, 21))); // 1
