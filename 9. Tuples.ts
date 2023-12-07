// Order is important

// 1.
let tupleUser: [string, number, boolean];

tupleUser = ['Ashish', 66, true];
// tupleUser = [55, 'kushwaha', false];  can't do that


// 2.
let rgb: [number, number, number];
rgb = [255, 34, 66];
// rgb = [122, 19, 49, 0.3]; can't do that


// 3.
// https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array

let user: [string, number];
user = ['Ashish', 56];

// why am I allow to do that, and what's the solution of that
user[0] = 'kushwaha'
user.push('ashish')