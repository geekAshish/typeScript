//1.  readonly : if you don't want anyone to change value
//2.  ?    :    If an obj value dose not require (optional)
//3.  merging two type

type User = {
  readonly _id: string; // You can't manipulate _id
  name: string;
  number: number;
  isActive: boolean;
  isCreditCard?: boolean; // if user hove not credit card, it's not required
}

const myUser: User = {
  _id: '221',
  name: 'Ashish',
  number: 9999999999,
  isActive: true
}

// myUser._id = '22'; // It will give you an error
myUser.name = 'Kushwaha';




// #####################################################
// merging two types in one

type cardNumber = {
  cardNumber: String;
}

type cardDate = {
  cardDate: String;
}

type cardDetails = cardNumber & cardDate & {
  CVV: number;
}

