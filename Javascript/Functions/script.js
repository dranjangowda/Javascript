//Function
// a funciton is a simple piece of code that we can use again and again
//it holds many piece of code

//declaring a function
function loggger() {
    console.log("my name is ranjan")
}

//calling // running // invoking a  function
loggger()

// when we call the function the code in the function gets executed we can call it multiple times whenever we want

// when we write function we can also pass data in the function and it can also return a data back

function fruitprocessor(apples, oranges) {//we pass parameters n parameteres are like variable specific to this function
    //they will get defined once we call the function
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`

    return juice;
}
const appleJuice = fruitprocessor(3, 4)
//we need to store the return value we do that by just saving the value in the appleJuice variable.
console.log(appleJuice)
// we can directly print the value by console.log(fruitProcessor(3,4)) here we did not capture any value we just printed the value

//basic sum function

const num1 = 20;
const num2 = 30;

function sum(a, b) {
    let summation;
    summation = a + b;
    return summation
}

const firstSum = sum(num1, num2)
const secondSum = sum(2333, 445)
console.log(firstSum)
console.log(secondSum)

//function allow us to write maintanable code


//function declaration and expressions

function calcAge1(birthYear) {
    return 2023 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1)

//function expression
// we store it in a variable and then the variable becomes the function
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}

const age2 = calcAge2(1994)
console.log(age2)
// the above function is an expression and expression produce a value
//function in javascript are values just like numbers booleans ,string;
// difference between declaration and expression
// we can call the declaration before the code is written
//if we write the same thing with the expression it shows cannotn access before initalization

// to write a neat code using expression would be fine

//Arrow Functions
// simple form of writing a function expression which is shorter and short 

const calcAge3 = (birthYear) => 2023 - birthYear
const age3 = calcAge3(1990)
console.log(age3)

//how many years a  person has left till retirement

const yearsUntilretirement = (birthYear, firstName) => {
    const age = 2023 - birthYear
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilretirement(1992, "raj"))

//if we have multiple parameteres we have to wrap it in the braces

// arrow function does not get this keyword

//functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4
}
function fp(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    return `${applePieces} , ${orangePieces}`
}
console.log(fp(3, 5))

//these are the 3 types of writing function works similar way
//parameters : placeHolders to receive input values.Like local variables of a function
//function body : block of code that we want to reuse .Processes the functions input data
//return statement to output a value from the functio and terminate execution
//Arguments : actual values of function parameters,to input data