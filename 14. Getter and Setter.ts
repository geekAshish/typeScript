// Getter and Setter are used for access private and public properties and methods with some extra logic

class getUserData {
  private _courseCount: number; // To access private variable, we've to use getter and setter

  constructor(
    public name: string,
    public userName: string,
    readonly userId: number,
    private googleId: string
  ) {
    this.name = name;
    this.userName = userName;
    this.userId = userId;
    this.googleId = googleId;
  }

  // Private method
  private deleteUserToken() {
    console.log(`Token has been deleted`);
    
  }

  // Getter Function
  get getAppleEmail(): string {
    return `Apple-Id${this.userId}`;
  }

  // Getter Function
  get courseCount(): number {
    return this._courseCount;
  }

  // Setter Function, in setter there is no return type
  set courseCount(courseNum) {
    if(courseNum <= 1) throw new Error('Should be more then 1');
    this._courseCount = courseNum;
  }
}


const myProfile = new getUserData('Ashish', 'teenAgeMonk', 33, 'g54');
const userAppleId = myProfile.getAppleEmail
console.log(userAppleId);

myProfile.courseCount = 5;
console.log(myProfile.courseCount);

