

// console.log(Boolean(""))
// console.log(Boolean("Hello"))
// console.log(Boolean(0))
// console.log(Boolean(10))

// -----------------------------------------------------

// const result = "hello" || "goodbye"
// console.log(result)

// -----------------------------------------------------

// function expensiveOperation() {
//     console.log("Run this code!");
//     return "Result";
// };

// const result = true || expensiveOperation()
// console.log(result)

// -----------------------------------------------------

const userAge = 0

const ageWith0 = userAge || 18;
const ageWithNull = userAge && 18;

console.log(ageWith0)
console.log(ageWithNull)