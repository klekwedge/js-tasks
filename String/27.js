// Удалить первое вхождение искомой подстроки
// Напишите функцию deleteFirstOccurrence(str, subst),
// которая удаляет из строки str первое вхождение подстроки substr.

function deleteFirstOccurrence(str, substr) {
  return str.replace(substr + ', ', '');
}

const str = 'вишня, груша, слива, груша';
console.log(deleteFirstOccurrence(str, 'груша')); // вишня, слива, груша
