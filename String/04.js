// Сделать первую букву строки прописной
// Напишите функцию, которая принимает 
// строку в качестве аргумента и преобразует 
// регистр первого символа строки из нижнего регистра в верхний.

function cursiveLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const str = "string not starting with capital";

console.log(cursiveLetter(str)); // String not starting with capital
