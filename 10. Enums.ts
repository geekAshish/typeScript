// When restricts somebody's choise

// USE CASE
// booking tickets
// nav bar



// 
const enum SeatChoice {
  AISLE = "AISLE", // default value is 0 and so on
  MIDDLE = "MIDDLE",
  WINDOW = "WINDOW"
}
// you can also define function

// SeatChoice. will give you only three options
const ashishChoice = SeatChoice.WINDOW
console.log(ashishChoice);


// it will generate too much js code, to prevent that you can add const before enum