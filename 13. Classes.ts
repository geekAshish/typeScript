class User {
  email: string;
  name: string;
  id: number;
  constructor(name: string, email: string, id: number) {
    this.email = email;
    this.name = name;
    this.id = id;
  }
}

const person = new User('ashish', 'a@a.com', 334);
