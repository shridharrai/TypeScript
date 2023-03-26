class User {
  private dbId: number; // in JS private var. are defined using #dbId(accessed only within the class where defined)
  name: string; // by default variables are public
  email: string;
  protected role: "ADMIN" | "USER"; // Same as private var. but are inherited to child class and can be acesses there
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  get getDbId(): number {
    return this.dbId;
  }

  set setDbId(id: number) {
    this.dbId = id;
  }
}

class Admin extends User {
  cahngeRole() {
    this.role = "ADMIN";
  }

  get getRole(): "ADMIN" | "USER" {
    return this.role;
  }
}

let userObj = new User("Shridhar", "shr@gmail.com");
console.log("User obj is ", userObj);
// userObj.dbId -> private var not accessible
userObj.setDbId = 2;
console.log("Id is ", userObj.getDbId);

let userObj1 = new Admin("Shridhar", "shr@gmail.com");
userObj1.cahngeRole();
console.log("User obj1 is ", userObj1);
console.log("Role is ", userObj1.getRole);

export {};
