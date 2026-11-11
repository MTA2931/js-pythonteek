

// let numbers = [2 , 4 , 6 , 8];

// let doubled = []

// for (let i = 0 ; i < numbers.length ; i++) {
//     doubled.push(numbers[i] * 2)
// }

// console.log(doubled)

// Output: [ 4, 8, 12, 16 ]

// ========================================================

// let numbers = [2 , 4 , 6 , 8];

// let doubled = numbers.map(function(number) {
//     return number * 2
// });

// console.log(doubled)

// Output: [ 4, 8, 12, 16 ]

// ========================================================

// array.map(function(element, index, array) {return newValue});

// ========================================================

// let names = ["Ali" , "Sara" , "Arash" , "Mohammad"];

// let result = names.map(function(name, index) {
//     return index + "_" + name
// });

// console.log(names)
// console.log(result)

// Output: 
// [ 'Ali', 'Sara', 'Arash', 'Mohammad' ]
// [ '0_Ali', '1_Sara', '2_Arash', '3_Mohammad' ]

// ========================================================

// let numbers = [10 , 20 , 30]

// let result = numbers.map(function(num) {return String(num)});

// console.log(result)
// console.log(numbers)
// console.log(typeof numbers)
// console.log(typeof result)
// console.log(typeof numbers[0])
// console.log(typeof result[0])

// Output:
// [ '10', '20', '30' ]
// [ 10, 20, 30 ]
// object
// object
// number
// string

// ========================================================