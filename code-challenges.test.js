// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("CapName", () => {
  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("Returns an array with names capitalized", () => {
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(CapName(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
//GOODFAILURE ReferenceError: CapName is not defined

// b) Create the function that makes the test pass.
// Pseudo code:
//Function Name: CapName
//Input: Array of objects
//Output: Array of strings
//Process: Create your function that takes in a parameter of an array. Use .map to iterate through the array and also return a new array. To call on a value from an object use the key:value. Since we know the first name is at index zero you should capitalize whatever character is at index 0. Split the value into an array, make sure that all the characters are seperated. Use .indexOf to find where the space is between the first and last name, this will help capitalize the last name. Then seperate the first and last name, have a variable hold each name. To do that make an array that seperates the first and last name by using .split(' '). That will make an array have two values. Then use concat (+) to combine the capital letter with the word. Make sure to use slice to get rid of the lowercase we don't need. Then make a variable that will hold the names together with concat (+). Lastly, return the string interpolation!

const CapName = (arr) => {
  return arr.map((value) => {
    const firstCase = value.name.charAt(0).toUpperCase() //Capitalizes the first letter of the first name
    const name = value.name.split('').indexOf(' ') // Finds the indexOf where the space is in each name. 
    const lastCase = value.name.charAt(name + 1).toUpperCase() //Capitalizes the first letter of the last name

    const seperateName = value.name.split(' ') //Makes the first name be in the 0 index while the last name is in the 1st index. 
    const firstName = seperateName[0] // Holds just the 0 index of the array, so just the first name.
    const lastName = seperateName[1] //Holds just the 1st index of the array, so just the last name.

    const capFirstName = firstCase + firstName.slice(1) //Concats the capital letter of the first name and combines it with the first name. The slice uses everything after the 1st index.
    const capLastName = lastCase + lastName.slice(1) //Concats the capital letter from the last name and combines it with the last name. The slice uses everything after the 1st index.
    const fullName = capFirstName + ' ' + capLastName //Connects both the full capitalized first and last name

    return `${fullName} is ${value.occupation}.` //Returns the string interpolation
  })
}
// console.log(CapName(hitchhikersCharacters))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainOnly", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  it("Returns an array of only the REMAINDERS of the number when divided by 3", () => {
    expect(remainOnly(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainOnly(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
//GOOD FAILURE ReferenceError: remainOnly is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
//Input: Array
//Output: Array of numbers
//Process: Create a function. The function takes in an array. Filter through the array to return a new array of the typeof values that are numbers. Then iterate through the new array using .map to find the remainder of each value.

const remainOnly = (arr) => {
  const findData = arr.filter((value) => typeof value === 'number') //Filters through given array and looks for the typeof data type that is a 'number'
  return findData.map((value) => { //Iterate through the new array. 
    return value % 3 //Finds the remainder of each value divisible by three
  })
}
// console.log(remainOnly(hodgepodge1))
// console.log(remainOnly(hodgepodge2))

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("sumCubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  it("Returns the sum of the numbers cubed", () => {
    expect(sumCubed(cubeAndSum1)).toEqual(99)
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  })
})
//GOOD FAILURE ReferenceError: sumCubed is not defined


// b) Create the function that makes the test pass.

// Pseudo code:
//Input: Array
//Output: Number
//Process: Create a function that takes in an array. Create two new variables, one that holds an empty array and another that holds a number. Then create a for loop to iterate through the array that is being passed through the function. Then cube each number in the array. Push those numbers, since now they aren't in an array, into an empty array. Then add each of the numbers in the new array to get the sum and return the new sum.

const sumCubed = (arr) => {
  let newArr = [] //A variable that holds an empty array
  let sum = 0 //A variable that holds a number
  for (let i = 0; i < arr.length; i++) { //Iterates through array being passed
    let cubed = arr[i] * arr[i] * arr[i] //cubed stores the arr indexes being cubed
    newArr.push(cubed) //Pushes each number into empty array
    sum = newArr[0] + newArr[1] + newArr[2] // Adds each number in the array, now that it is cubed. 
  }
  return sum //Returns the sum of the numbers cubed!
}
// console.log(sumCubed(cubeAndSum1))
// console.log(sumCubed(cubeAndSum2))