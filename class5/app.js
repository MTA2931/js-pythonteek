

// let scores = [12 , 18 , 9 , 20 , 14 , 17]

// let result = scores.filter(function(score) {
//     return score > 15
// });

// console.log(result);

// Output: [ 18, 20, 17 ]

// ===============================================

// let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];

// let evenNumbers = numbers.filter(function(num) {
//     return num % 2 == 0
// });

// console.log(evenNumbers);

// Output: [ 2, 4, 6, 8 ]

// ===============================================

// let numbers = [5 , 12 , 8 , 20 , 15 , 3 , 7 , 25];

// let result = numbers.filter(function(num) {
//     return num > 10
// });

// console.log(result);

// Output: [ 12, 20, 15, 25 ]

// ===============================================

// let names = ["Ali" , "Mohammad" , "Sara" , "Reza" , "Sepehr"];

// let result = names.filter(function(name) {
//     return name.length > 5
// });

// console.log(result);

// Output: [ 'Mohammad', 'Sepehr' ]

// ===============================================

// let students = [
//     {name: "Amir" , score: 14},
//     {name: "Arash" , score: 20},
//     {name: "Sara" , score: 18},
//     {name: "Reza" , score: 8},
//     {name: "Ali" , score: 12},
//     {name: "Mohammad" , score: 6},
// ];

// let result = students.filter(function(st) {
//     return st.score > 15
// });

// console.log(result)

// Output: [ { name: 'Arash', score: 20 }, { name: 'Sara', score: 18 } ]

// ===============================================

// let data = [
//     "Ali",
//     "",
//     null,
//     "Sara",
//     undefined,
//     "Reza",
//     0,
//     false
// ];

// let result = data.filter(function(item) {
//     return Boolean(item)
// });

// console.log(result)

// Output: [ 'Ali', 'Sara', 'Reza' ]

// ===============================================

// let products = [
//     {name: "Mouse", price: 300000},
//     {name: "Keyboard", price: 800000},
//     {name: "Monitor", price: 6000000},
//     {name: "USB", price: 200000}
// ];

// let result = products.filter(function(product) {
//     return product.price < 500000
// }).map(function(product) {
//     return product.name
// });

// console.log(result)

// Output: [ 'Mouse', 'USB' ]