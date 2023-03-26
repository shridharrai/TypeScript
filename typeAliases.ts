type User = {
  name: string;
  age: number;
  email: string;
};

function createUser(user: User): User {
  return {
    name: user.name,
    age: user.age,
    email: user.email,
  };
}

createUser({ name: "Shridhar", age: 22, email: "shri@gmail.com" });

export {};
