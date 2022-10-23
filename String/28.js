// Заменить все вхождения подстроки
// Напишите функцию replaceAll(find, replace, str),
// которая заменяет в строке str все вхождение
// подстроки find на подстроку replace.

function replaceAll(find, replace, str) {
  const pattern = new RegExp(find, 'gi');
  return str.replace(pattern, replace);
}

const str = 'abc def def lom abc abc def';
console.log(replaceAll('abc', 'x', str)); // x def def lom x x def
