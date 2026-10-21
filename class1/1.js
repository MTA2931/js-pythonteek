// const color = ["red" , "green" , "blue"];

// console.log(color[0]);

// const user = {
//     name: "ali" , age: 20
// };

// console.log(user.age);

// --------------------------------------------------------------

// const numbers = [10 , 20 , 30 , 40];

// const [first , secend , third , fourth] =  numbers;

// console.log(secend , fourth)

// --------------------------------------------------------------

// let numbers = [10 , 20 , 30 , 40];

// let [first , secend , third , fourth] =  numbers;

// console.log(secend , fourth)

// --------------------------------------------------------------

// const numbers = [5];

// const [first , secend = 10] = numbers;

// console.log(first)
// console.log(secend)

// --------------------------------------------------------------

// const {name , age} = {
//     name: "mani",
//     age: 14,
//     city: "mashhad"
// }

// console.log(neme , age)

// --------------------------------------------------------------

// const user = {
//     name: "ali"
// };

// const { name , city = "unknown" } = user;

// console.log(neme);
// console.log(city);

// --------------------------------------------------------------

// const firstarry = [1 , 2 , 3];
// const secendarry = [4 , 5 , 6];

// const result = [0 , ...firstarry , ...secendarry , 7]

// console.log(result)

// --------------------------------------------------------------

// const orginal = [10 , 20 , 30];
// const copy = orginal;

// copy[0] = 99;

// console.log(orginal);
// console.log(copy);

// --------------------------------------------------------------

// const user = {
//     name: "ali" , age: 26
// };

// const update_user = {
//     ...user, city: "Tehran"
// };

// console.log(update_user)

// --------------------------------------------------------------

const personal = {
    name: 'ali' , age: 26
};

const location = {
    country: "iran" , city: "mashhad"
};

const profile = {
    ...personal , ...location
};

console.log(personal);
console.log(location);
console.log(profile);