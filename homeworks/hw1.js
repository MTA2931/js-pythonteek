const fruits = ["سیب", "موز"];
const vegetables = ["هویج", "کاهو"];

const combined = [...fruits, ...vegetables];

console.log(combined);
console.log(fruits);
console.log(vegetables);



// --------------------------------------------------------------



const user = {
  name: "حسین",
  age: 30
};

const userWithCity = { ...user, city: "تهران" };

console.log(userWithCity);
console.log(user);