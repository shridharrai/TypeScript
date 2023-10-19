function createUser({ name: string, isActive: boolean }) {}
createUser({ name: "Shridhar", isActive: true });
//Object weird behaviour while passing as a arg
// createUser({ name: "Shridhar", isActive: true, email:'shri@gmail.com'})
const user = { name: "Shridhar", isActive: true, email: "shri@gmail.com" };
createUser(user); //Working

//returning obj from func.
function createObject(
  name: string,
  email: string
): { name: string; email: string } {
  return { name: "Shridhar", email: "shri@gmail.com" };
}

// function fun(name: string, phone: number): number {
//   return phone
// }

export {};
