// https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// Best Practices for writing typescript

// 1. Always check which typeof variable is coming of
function checking(val: number | string) {
  if (typeof val === "number") {
    // perform some logic
    return `this is number`;
  }

  // now we know the code will come here when it's string
  return `this is string  `;
}

// 2. You should be writing like that because it could be null, null check
function bestPractices(val: string | null) {
  if (!val) {
    console.log(val, "the value is null");
    return;
  }

  // perform some logic
  return val.toUpperCase();
}

bestPractices("ashish");

// 3. The "in" operator narrowing
interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(data: User | Admin) {
  if ("IsAdmin" in data) {
    console.log(`This user is Admin`);
    return data.IsAdmin;
  } else return false;
}

// 4. instanceof and Type Predicates
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-narrowing

// Value which is constructed with new keyword, like
// new Date(), new Array()

function logValue(value: string | Date) {
  if (value instanceof Date) {
    console.log(value.toUTCString());
  } else {
    console.log(value.toUpperCase());
  }
}

// 5. Using type Predicates
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates

type Fish = { swim: () => void };
type Bird = { fly(): void };

// Now here if the function returns true, it's Fish, so we are defining, (pet is Fish)
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "Fish Food";
  } else {
    return "Bird Food";
  }
}

// 6. Discriminated Union and Exhaustiveness Checking with never
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions

// Discriminated Union
// adding a key "kind" in interface

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Square | Circle | Rectangle;

const getShapeArea = (shape: Shape) => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "rectangle":
      return shape.width * shape.height;

    // Exhaustiveness Checking with never
    // you should add a type never as default,
    // so if user can some other interface or type to Shape it throw an error
    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
};
