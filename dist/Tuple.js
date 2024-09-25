"use strict";
// Tuples
let orang = ["zahran", 21, true];
// Tuples Example
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [94.5, 20.1];
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// Named Tuples
let pengguna;
pengguna = ["peaches", 25];
console.log(pengguna[0]);
