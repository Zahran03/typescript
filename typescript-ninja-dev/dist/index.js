"use strict";
// Type Guard
function swapIdType(id) {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType("2");
function logDetails(value) {
    if (value.type === "user") {
        console.log(value.email, value.username);
    }
    if (value.type === "person") {
        console.log(value.firstname, value.age);
    }
}
