// Type Guard

type id = number | string;

function swapIdType(id: Id): Id {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
}

const idOne = swapIdType(1);
const idTwo = swapIdType("2");

// Tagged union types
interface Users {
  type: "user";
  username: string;
  email: string;
  id: Id;
}
interface Person {
  type: "person";
  firstname: string;
  age: number;
  id: Id;
}

function logDetails(value: Users | Person): void {
  if (value.type === "user") {
    console.log(value.email, value.username);
  }
  if (value.type === "person") {
    console.log(value.firstname, value.age);
  }
}
