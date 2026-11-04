const temperature = 32;

if (temperature > 30) {
  console.log("Warm");
} else {
  console.log("Cold");
}

// Output: Warm

// -------------------------------------------------

const student = {
  name: "Ali",
  score: 18
};

const message = `Hello ${student.name}! Your score is ${student.score}. ${student.score >= 10 ? "You passed!" : "You failed!"}`;

console.log(message);

// Output: Hello Ali! Your score is 18. You passed!
