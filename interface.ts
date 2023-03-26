//Interface are like blueprint

interface User {
  readonly _id: string;
  name: string;
  isActive: boolean;
  gender?: string;
  isPaidUser: () => boolean;
  getCoupon(coupanName: string, value: number): number; //One more way to define type of functions in interface
}

//Reopening the interface -> Not possible in case of tyoes
interface User {
  city: string;
}

let userObj: User = {
  _id: "123",
  name: "Shridhar",
  isActive: true,
  city: "Delhi",
  isPaidUser: () => {
    return true;
  },
  getCoupon: (name, value) => {
    console.log("params are ", name, value);
    return value;
  },
};

userObj.getCoupon("Shr234", 20);

console.log("User obj is ", userObj);

// Inheritence in interface
interface Admin extends User {
  role: "ADMIN" | "USER";
}

let adminUserObj: Admin = {
  _id: "123",
  name: "Shridhar",
  isActive: true,
  city: "Delhi",
  role: "ADMIN",
  isPaidUser: () => {
    return true;
  },
  getCoupon: (name, value) => {
    console.log("params are ", name, value);
    return value;
  },
};

console.log("Admin user is ", adminUserObj);

export {};
