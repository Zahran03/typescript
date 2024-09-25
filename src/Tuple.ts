// Tuples
let orang: [string, number, boolean] = ["zahran", 21, true];

// Tuples Example

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [94.5, 20.1];

function useCoords(): [number, number] {
  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoords();

// Named Tuples
let pengguna: [name: string, age: number];
pengguna = ["peaches", 25];
console.log(pengguna[0]);
