// class User {
//   name: string;
//   public email: string; // If you don't define it like that, it'll be public always
//   private id: number = 9; // default value
//   readonly googleId: number;
//   constructor(name: string, email: string, id: number, googleId: number) {
//     this.email = email;
//     this.name = name;
//     this.id = id;
//   }
// }

// can write the same code like that
class User {

  constructor(
    public name: string,
    public email: string,
    private id: number, // we can't access it from out side of the class and inherit it
    protected _AddressName: string, // protected can be inherit but can't use outside class
    readonly googleId: number,
  ) {
    this.email = email;
    this.name = name;
    this.id = id;
  }
  
}

class address extends User {
  changeAddress() {
    this._AddressName = 'ADA'
  }
}

const person = new User('ashish', 'a@a.com', 334, 'delhi', 987);
