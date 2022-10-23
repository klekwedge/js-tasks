// Поделить строку на фрагменты
// Напишите функцию cutString(str, n),
// которая делит строку на подстроки, состоящие из n символов.

function cutString(str, n) {
  const pattern = new RegExp('.{1,' + n + '}', 'ig');
  return str
    .replace(pattern, function (match) {
      return match + ',';
    })
    .replace(/,$/, '');

  // const res = [];
  // for (let i = 0; i < str.length; i += n) {
  //   res.push(str.substr(i, n));
  // }
  // return res;
}

console.log(cutString('наслаждение', 3)); // нас,лаж,ден,ие
