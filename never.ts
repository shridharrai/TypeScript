/* never :- In a return type, this means that the function throws an exception or terminates execution of the program. 
           It will never return a value */
const handleError = (errMsg: string): never => {
  throw new Error(errMsg);
};

export {};
