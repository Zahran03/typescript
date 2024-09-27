// Any in variabel

let sesuatu: any = "Makan";

sesuatu = 12;
sesuatu = "berenang";

// Any in Array

let anything: any[] = ["buah", 12, true];

anything.push("Anda");
anything.push(12);

// function & any

function addTogether(value: any): any {
  return value + value;
}

const resultOne = addTogether("hello");
console.log(resultOne);
const resultTwo = addTogether(2);
console.log(resultTwo);
