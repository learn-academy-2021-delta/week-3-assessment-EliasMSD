// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
 
// a) Create a test with expect statements for each of the variables provided.
describe("fibonacci", ()=>{
    test('should return an array of numbers', () => {
     expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8])   
    })
    test('should return an array of numbers', () => {
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])   
       })
    
})
// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.

let num1=1,num2=1,nextNum
let fibonacci=(number)=>{
    let sequence=[]
    if(number<2){return number
    }else{
        for(let i=0;i<number;i++){
        sequence.push(num1)
        nextNum=num1+num2
        num1=num2
        num2=nextNum              
}
    }return sequence
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("oddNumbers",()=>{
    test("odd numbers sorted in ascending order",()=>{
        expect(oddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
    })
    test("odd numbers sorted in ascending order",()=>{
        expect(oddNumbers(fullArr2)).toEqual([-823, 7, 23])
    })
    
})

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]


var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.
let oddNumbers=array=>array.filter((value)=>typeof(value)==="number")
.filter((item)=>item%2!==0).sort((a,b)=>a-b)

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. 
//An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe("sumOfconsecutiveEle",()=>{
    test("returns an array with sum of two consecutive elements",()=>{
        expect(sumOfconsecutiveEle([2, 4, 45, 9])).toEqual([2, 6, 51, 60])
    })
    test("returns an array with sum of two consecutive elements",()=>{
        expect(sumOfconsecutiveEle([0, 7, -8, 12])).toEqual([0, 7, -1, 11])
    })
    test("returns an array with sum of two consecutive elements",()=>{
        expect(sumOfconsecutiveEle([])).toEqual([])
    })
})
var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

// b) Create the function that makes the test pass.
let sumOfconsecutiveEle=(array5)=>{
    if(array5.length==0)return []
for (let i = 1; i < array5.length; i++) {
  array5[i] = array5[i-1] + array5[i];
}return array5
}


//one test fail in the fibonacci ,it runs in console but it fails to pass the test