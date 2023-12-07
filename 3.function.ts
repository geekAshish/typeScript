// https://www.typescriptlang.org/docs/handbook/2/functions.html

function addTwoNumber(num: number) {
  // num.toUpperCase() you're not allowed to do that
  const addNumber = num + 2;
  return addNumber;
}

function toUpper(name: string) {
  return name.toUpperCase();
}

function signIn(name: string, email: string, isSignUp: boolean) {}
function signUp(name: string, email: string, isSignUp: boolean = false) {}

function getMoney(amount: number): number {
  return 0
}

// There could be two type ############################
// function apiCall(num: number) {
//   if(num > 5) {
//     return true;
//   }
//   return '200 OK';
// }

const getArrow = (s: string): string => {
  return ""
}

const heros = ["iron man", "ben ten", "hulk"]
// good practice
heros.map((hero: string): string => {
  return `Hero name is ${hero}`;
})


const consoleError = (errMsg: string): void => {
  console.log(errMsg);
}

// If a function is never gonna return any thing and not mean to return
const handleError = (errMsg: string): never => {
  throw new Error(errMsg);
}

addTwoNumber(5);
toUpper('root');
signIn('Ashish', 'ashish@email.com', true);
signUp('Ashish', 'ashish@email.com');



