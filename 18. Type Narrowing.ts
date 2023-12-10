// https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// Best Practices for writing typescript
// Always check which typeof variable is coming of

function checking(val: number | string) {
  if(typeof val === "number") {
    // perform some logic
    return `this is number`
  }

  // now we know the code will come here when it's string
  return `this is string  `
}



// You should be writing like that because it could be null

function bestPractices(val: string | null) {
  if(!val) {
    console.log(val, 'the value is null');
    return
  }

  // perform some logic
  return val.toUpperCase()
}

bestPractices('ashish')

