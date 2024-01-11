
// CHALLENGE #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

// "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

// 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is 




let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark, BMIJohn = 0;

BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark); // display value without toFixed method

fixedBMIMark = parseFloat(BMIMark).toFixed(2);

BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn); // display value without toFixed method

ixedBMIJohn = parseFloat(BMIJohn).toFixed(2);

BMIJohn > BMIMark ? console.log(`John's BMI ${ixedBMIJohn} is a higher  than Mark' BMI ${fixedBMIMark}`) : console.log(`Mark's BMI ${fixedBMIMark} is a higher than John's BMI ${ixedBMIJohn}`);