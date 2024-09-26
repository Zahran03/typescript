// Union Types
let someId: number | string;

someId = 1;
someId = "2";

let email: string | null = null;

email = "mario@netninja.dev";
email = null;

type Id = number | string;
let anotherId: Id;

anotherId = "1";
anotherId = 2;

// Union type pitfall

function swapType(id: Id): Id {
  // can only use props and methods common to
  // both number nd string types
  // parseInt(id) --> not allowed
  return id;
}
