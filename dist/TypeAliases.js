"use strict";
// Type Aliases
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
const userOne = {
    name: "Zahran",
    age: 21,
};
function formatUser(user) {
    console.log(`${user.name} is ${user.age} years old`);
}
formatUser(userOne);
formatUser({ name: "rehan", age: 21 });
