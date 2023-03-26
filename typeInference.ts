// let userId: number = 123.23
// let userId: number;
// userId = 123.43;

/* typeInference :- when you assign the values immediately on declaration then typescript automatically infer there types, 
                    we don't need to define the type mannualy there */
let userId = 123.56;
// userId = 'shridhar'

const nums = [1, 2, 3];
nums.map((num): string => {
  return `Number is ${num}`;
});

export {};
