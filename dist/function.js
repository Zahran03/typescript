"use strict";
function tambahDuaAngka(a, b) {
    return a + b;
}
const kurangiDuaAngka = (a, b) => {
    return a - b;
};
tambahDuaAngka(2, 1);
kurangiDuaAngka(5, 1);
function tambahSemuaAngka(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
tambahSemuaAngka([1, 2, 3, 4, 5]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting} ${name}`;
}
const result = formatGreeting("Zahran", "Hallo");
console.log(result);
