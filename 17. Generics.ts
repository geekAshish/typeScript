// https://www.typescriptlang.org/docs/handbook/2/generics.html


const pinCode: number[] = [];
const names: Array<string> = [];


// The type it's take, it'll return the same type
// function createBuilding<Type>(val: Type): Type{return val}

function createBuilding<T>(val: T): T {
  return val;
}


interface Building {
  blocks: string;
  area: string;
}

function createHouse<Building>(val: Building): Building {
  return val;
}

createHouse<Building>({
  blocks: '6',
  area: '4bhk'
})


// why it's happening just a doubt
// function createHouse<Building>(val: Building): Building {
//   return val;
// }
// createHouse({ // it shouldn't be allowed to do that, just passing the diff value
//   blocks: '6',
// })


// 2.
// Taking array as a parameter
// This means taking an array type T[], and returning the one of the value of it type T
function getArray<T>(value: T[]): T {
  // do some operation
  // So, we're using array, we can perform array methods
  const myIndex = 3;
  return value[myIndex];
}

// Arrow function syntax
const getDataFromDataBase = <A> (data: Array<A>): A => {
  return data[0];
}



// 3. Generic Classes
// https://www.typescriptlang.org/docs/handbook/2/generics.html#using-type-parameters-in-generic-constraints


interface UserDataBase {
  connection: string,
  username: string,
  password: string,
}

function connectUserWithDataBase<T, U extends UserDataBase>(valueA: T, valueB: U): Object {
  return {
    valueA,
    valueB
  }
}

connectUserWithDataBase("Ashish", {connection: 'db', username: "teenAgeMonk", password: 'bkd'})




//

interface Quiz {
  name: string
  question: string
}

interface Course {
  name: string
  author: string
  duration: number
}

// Generic class handles the common case of the Quiz and Course
class EnrolledUser<T extends Quiz, U extends Course> {
  public Quiz: Array<T> = []
  public Course: Array<U> = []

  getAllQuiz(product: T) {
    this.Quiz.push(product)
  }
  getAllCourse(product: U) {
    this.Course.push(product)
  }
}

const userOne = new EnrolledUser()

userOne.getAllQuiz({name: 'ashish', question: 'q1'});
userOne.getAllCourse({name: 'ashish', author: 'ashish', duration: 9});

console.log(userOne.Course);
console.log(userOne.Quiz);



