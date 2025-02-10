//First-Part
//Task 1: Declare Variables

let studentName = "Alice";
let studentAge = 15;
let studentGrade = 10;
let isPresent = true;

//Task 2: Assign sample values

studentName += " (is the student's name)";
studentAge += " (is the student's age)";
studentGrade += " (highschool grade)";
isPresent += " (she is present at school today)";

//Task 3: Display on console

console.log("-" + studentName);
console.log("-" + studentAge);
console.log("-" + studentGrade);
console.log("-" + isPresent);

//Second-Part
//Task 1: Declare variables to store two numeric values
let num1;
let num2;

//Task 2: Assign
num1 = 8;
num2 = 5;

let sum = num1 + num2
let minus = num1 - num2
let times = num1 * num2
let division = num1 / num2

//Task 3: Run on console
console.log("Sum:" + sum);
console.log("Difference:", minus);
console.log("Product:" + times);
console.log("Quotient:", division);

//Task 4: Update values
num1 = 12;
num2 = 7;

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

//Task 5: Apply comparison operators
console.log("Is num1 equal to num2?", num1 == num2);
console.log("Is num1 greater than num2?",  num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2);

//Task 6: Apply logical operators
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 == 0 || 2 ==0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
