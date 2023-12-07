// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

type User = {
  name: string;
  age: number;
  mobile: number;
  address: string;
  mail: string;
  isLogin: boolean;
}

function getUserProfile(userData: User): User {
  return userData;
}

const userData = {name: "", age: 0, mobile: 9, address: '', mail: '', isLogin: true}
getUserProfile(userData);