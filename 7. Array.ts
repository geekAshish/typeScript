// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays

// You can't do that ########################################################################
// const hero = [];
// hero.push('iron')


// type is string-array/number-array
const hero: string[] = [];
// const heroPower: number[] = [];
const heroPower: Array<number> = []; // different way of doing that


type User = {
  name: string;
  mobile: number;
}

const profile: Array<User> = []

hero.push('bat');
heroPower.push(3);
profile.push({name: "ashish", mobile: 99})


// nested array ########################################################################
const MLModel: number[][] = [
  [44, 44, 33],
  [47, 40, 3],
  [44, 44, 33],
]


// ReadonlyArray ########################################################################
const myWebsite: ReadonlyArray<string> = ['ashish'];

// myWebsite.push() can't manipulate data
console.log(myWebsite[0])