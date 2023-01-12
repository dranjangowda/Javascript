//array is like a container in which we can through variables and later we can use them

const friends = ['michael', 'steven', 'peter']
console.log(friends)

const years = new Array(1991, 1992, 1994)
//this is a way of creating an array using function

console.log(friends[2])
console.log(friends.length)//gives you the length of an array
console.log(friends[friends.length - 1])//to get last element of an array


//replacing the array element or mutate the array 
friends[2] = 'jay'
console.log(friends)

// array is a non primitive value so we can change the value inside the array
//we cannot replave the entire array
//we can only change or replace one element in an array

const firstName = 'jonas'
const jonas = [firstName, "schmedtmann", 2023 - 1995, friends]
console.log(jonas)


//some built in functions which can directly apply on array this is called methods
//methods


//to add elements
//push - adds elements to the end of the array
friends.push("great")
console.log(friends)
//push is a function
// push adds the element to the array and return the length of the array
const newLength = friends.push("just")
console.log(friends)
console.log(newLength)
//method to add the element to the begining of the array it is called unshift
friends.unshift('john')
console.log(friends)

//to remove elements
//pop - removes the element from the end of the array
friends.pop()
console.log(friends)
// this method returns the element which is removed from the array which might be useful sometime and we can store it in a variable
//shift- to remove the element from the start of the array
friends.shift()
console.log(friends)

//method to know the index of the element 
console.log(friends.indexOf('steven'))

// to check the element is in the array or not
console.log(friends.includes('bob'))
