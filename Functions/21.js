// Найти первый неповторяющийся символ
// Напишите функцию, чтобы найти первый неповторяющийся символ.

function findFirstNotRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    const el = str[i];
    if (str.indexOf(el) === str.lastIndexOf(el)) {
      return el;
    }
  }
}

console.log(findFirstNotRepeatedChar('фывфавыапрс')); // п
