class User {
  private dbId: number; // in JS private var. are defined using #dbId
  name: string; // by default variables are public
  email: string;
  constructor(name: string, email: string, id: number) {
    this.name = name;
    this.email = email;
    this.dbId = id;
  }
}

// class User {
//   constructor(
//     public name: string,
//     public email: string,
//     private dbId: number
//   ) {}
// }

let userObj = new User("Shridhar", "shr@gmail.com", 123);
console.log("User obj is ", userObj);
// userObj.dbId -> private var not accessible

export {};
