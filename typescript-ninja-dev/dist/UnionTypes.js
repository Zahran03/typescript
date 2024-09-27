"use strict";
// Union Types
let someId;
someId = 1;
someId = "2";
let email = null;
email = "mario@netninja.dev";
email = null;
let anotherId;
anotherId = "1";
anotherId = 2;
// Union type pitfall
function swapType(id) {
    // can only use props and methods common to
    // both number nd string types
    // parseInt(id) --> not allowed
    return id;
}
