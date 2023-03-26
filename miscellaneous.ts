type User = {
  readonly _id: string; //Pure ts feature
  name: string;
  isActive: boolean;
  gender?: string; //Optional value not mandatory to assign value to this variable (ts feature)
};

let user: User = {
  _id: "123",
  name: "Shridhar",
  isActive: true,
};

// user._id = '234' -> not allowed as id is readOnly
user.isActive = false;

// using existing defined types via intersections(can say like inheritence of types)
type BasicInfo = {
  name: string;
  email: string;
};

type AddressDetails = {
  city: string;
  zipCode: string;
};

type UserDetails = BasicInfo &
  AddressDetails & {
    cardNumber?: string;
    isActive: boolean;
  };

let userObj: UserDetails = {
  name: "Shridhar",
  email: "shri@gmail.com",
  city: "Delhi",
  zipCode: "110027",
  isActive: true,
};

export {};
