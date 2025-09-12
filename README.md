

1. Difference between var,let and const----

var-The scope of a var variable is functional or global scope.It can be updated and re-declared in the same scope.

let-The scope of a let variable is block scope.It can be updated but cannot be re-declared in the same scope.

const-The scope of a const variable is block scope.It can neither be updated or re-declared in any scope.

2. Difference between- forEach(),map(),filter()
forEach()-Just loops over an array.Always returns undefined.

map()-Loops over an array and creates a new array with transformed values. Return a new array of the same length.

filter()- Loops over an array and filters out elements based on a condition.A new array with only the elements that passed the test.

3. arrow function-

  const add=(a,b)=>{
        return a+b;
  }
  more shorter-  
   const add=(a,b)=>a+b;

4. destructuring-
 const numbers=[10,20,30];
 const [x,y,z]=[10,20,30];

5. template literals -
 write code between ` ` insted of " ".There are several advantages. we can put variable by using ${} sign.
 difference-string concatenation use + sign and template literals use ` `.Template literals more easier and cleaner code. 