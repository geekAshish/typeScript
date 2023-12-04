

let firstName: string = "Ashish kushwaha";
firstName.slice(0, 5) // it will only suggest you string related methods

console.log(firstName);



let age: number = 9;
age.toFixed() // it will only suggest you number related methods


let isLoggedIn: boolean = true;
console.log(isLoggedIn);


// type inference
// If you'r assigning value at the same time, you don't need to define type
let dob = 55;
dob = 'fifty-five';

export {}