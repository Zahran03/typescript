// Type Aliases

type Rgba = [number, number, number];

function getRandomColor(): Rgba {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);

// object literal

type User = {
  name: string;
  age: number;
};

const userOne: User = {
  name: "Zahran",
  age: 21,
};

function formatUser(user: User): void {
  console.log(`${user.name} is ${user.age} years old`);
}

formatUser(userOne);
formatUser({ name: "rehan", age: 21 });
