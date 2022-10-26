// Передать функцию JavaScript в качестве параметра
// Напишите программу для передачи "функции JavaScript"
// в качестве параметра.

function helloFunc(name) {
  console.log(`Hello ${name}`);
}

function addFunc(name, helloCallback) {
  helloCallback(name);
}

addFunc('John', helloFunc); // Hello Function
