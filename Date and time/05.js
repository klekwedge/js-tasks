// Получить название месяца с определенной даты
// Напишите функцию, чтобы получить название месяца с определенной даты.

function compareDates(firstDate, secondDate) {
  if (firstDate > secondDate) {
    return 'Date1 > Date2';
  } else if (firstDate < secondDate) {
    return 'Date1 < Date2';
  } else {
    return 'Date1 = Date2';
  }
}

console.log(
  compareDates(new Date('11/14/2021 00:01'), new Date('11/14/2021 00:00')) // Date1 > Date2
);
