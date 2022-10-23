// Удаление повторяющихся символов из строки
// Напишите функцию unique_letters(str),
// которая возвращает строку, оставив в ней
// только уникальные символы, т.е. встречающиеся в строке один раз

function uniqueLetters(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  }

  return Object.entries(obj)
    .filter((item) => item[1] === 1)
    .map((item) => item[0])
    .join(',');

  // const str = str.split('');
  // const res = str.filter(function (val, i, str) {
  //   return str.lastIndexOf(val) === str.indexOf(val);
  // });
}

const str = 'anaconda';
console.log(uniqueLetters(str)); // c,o,d
