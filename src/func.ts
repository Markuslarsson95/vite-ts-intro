import User from "./user";

export const foo = (x: User) => {
  console.log(x.name);
};

export const averageAge = (x: User[]) => {
  let totalAge = 0;
  x.forEach((element) => {
    totalAge += element.age;
  });
  return totalAge / x.length;
};

export const averageNumberOfHobbies = (x: User[]) => {
  let totalHobbies = 0;
  x.forEach((element) => {
    totalHobbies += element.hobbies.length;
  });
  return totalHobbies / x.length;
};

export const oldestUser = (x: User[]) => {
  return Math.max(...x.map((user) => user.age));
};
