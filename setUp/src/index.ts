console.log('Ashish Kushwaha is good boy');

interface UserProfile {
  username: string
  password: string
  dob: string
}

function createUserProfile<T, U extends UserProfile>(a: T, b: U): Object {
  return {
    a,
    b
  }
}

const storedValue = createUserProfile('zoom', {username: 'ashishdd', password: 'ashish47', dob: '4/7'})

// console.log(storedValue);

class getUserLogin<T> {
  public userProfile: Array<T> = []

  updateProfile(userInfo: T) {
    this.userProfile.push(userInfo);
  }
}

const userInfoData = new getUserLogin();

userInfoData.updateProfile('Ashish')
userInfoData.updateProfile(66)

console.log(userInfoData.userProfile);


