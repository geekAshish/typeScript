// https://www.typescriptlang.org/docs/handbook/2/generics.html


const pinCode: Array<number> = [];
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