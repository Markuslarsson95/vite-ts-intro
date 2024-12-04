import { foo, averageAge, averageNumberOfHobbies, oldestUser } from "./func";
import User from "./user";

const user: User = {
  name: "Markus",
  age: 30,
  hobbies: ["Padel", "Fotboll", "Gaming"],
};
const user2: User = {
  name: "Niklas",
  age: 47,
  hobbies: ["Brädspel", "Koda"],
};
const user3: User = {
  name: "Felicia",
  age: 28,
  hobbies: ["Läsa"],
};
foo(user);

const userArray: User[] = [user, user2, user3];

// console.log(arr);

console.log(`Medelåldern på alla användare är ${averageAge(userArray)}`);
console.log(
  `Medelvärde antal hobbys per användare är ${averageNumberOfHobbies(
    userArray
  )}`
);
console.log(`Äldsta användaren är ${oldestUser(userArray)} år gammal`);
