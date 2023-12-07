// If you're not sure about which type of data will come

// 1.
let score: number | string = 0;
score = 9;
score = "9";

// 2.
type userProfile = {
  name: string;
  id: number;
}

type Admin = {
  userName: string;
  id: number;
}

let person: userProfile | Admin = {
  name: "Ashish",
  id: 775
}

person = {
  userName: "teenAgeMonk",
  id: 870
}


// 3. Function
function getDbId(id: string | number) {
  console.log(`this is db id: ${id}`);

  // id.toLowerCase() // can't do that

  // to perform string method
  if (typeof id === "string") {
    id.toLocaleLowerCase()
  }
}
getDbId(55);
getDbId('33');



// 4. Array

// But the problem with that is, you can only assign one type of all variable
const table: string[] | number[] = [1, 2, 3]

const marks: (string | number)[] = [1, 2, '3', 4]


// 5. It could be useful
let seat: 'aisle' | 'middle' | 'window';

seat = 'aisle';
// seat = 'crew'  // you can't assign it