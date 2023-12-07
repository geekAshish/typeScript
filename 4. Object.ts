const mySelf = {
  name: "Ashish",
  email: 'ashish@gmail.com',
  mobile: 999999999,
  isLogin: true
}

// Object type as parameter
function createUser({name: string, isActive: boolean}) {}
createUser({name: "ben ten", isActive: true})


// Function return type object
function createCourse(): {name: string, mobile: number, isLogin: boolean} {

  const userProfile = {
    name: 'Ashish',
    mobile: 99,
    isLogin: true
  }

  return userProfile
}