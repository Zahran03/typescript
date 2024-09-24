"use strict";
// Array
let names = ["Zahran", "Komputer", "Mouse"];
let ages = [21, 22, 23];
names.push("Layla");
ages.push(25);
// Type inference with Arrays
let fruits = ["Banana", "Apple", "Cherry", "Mango"];
fruits.push("Avocado");
const f = fruits[1];
let things = [1, "fruits", true];
const t = things[0];
// Object Literals
let user = {
    firstName: "zahran",
    age: 21,
    id: 2,
};
user.firstName = "rizky";
user.id = 2;
// Type Inference with object literals
let person = {
    nama: "luigi",
    score: 45,
};
person.nama = "Andi";
person.score = 31;
const score = person.score;
