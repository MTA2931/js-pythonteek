

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

// const userAge = 0

// const ageWith0 = userAge || 18;
// const ageWithNull = userAge && 18;

// console.log(ageWith0)
// console.log(ageWithNull)

// -----------------------------------------------------

// const user = {
//     name: "Ali"
// }

// const text = user.address?.city;

// if (text === undefined) {
//     console.log("-__-");
// }

// -----------------------------------------------------

// const user = {
//     name: "Ali"
// }

// const city = user.address?.city??"City is undefined"
// console.log(city)

// -----------------------------------------------------

// const userAge = 0

// const result = userAge??18
// console.log(result)

// -----------------------------------------------------

// const userInput = ""
// const result = userInput || "Undefined"

// console.log(result)

// -----------------------------------------------------

// const isAdmin = true
// isAdmin && console.log(false)     // or 0

// Output: false     // or 0
// عجیبه، شهر عجیبه

// -----------------------------------------------------

const user = {
    name: "Ali"
}

const result = user.address?.city??"-__-";
console.log(result)