// Apps - programs that present data in a meaningful and consumable way.
// Apps tranform raw data into information
// and apps allow for intracting with the information.
// Apps deal with data and transformation of data. 
// Transforming data with functions

// PURE FUNCTIONS
// creates and returns value based only on the Input parameter and it causes no side effects.
// - must have input parameters
// - must not use any stateful values
// - must return  a value based on the input parameter
// - must not cause any side effects.

// Side Effect - whne your code causes some change outside of itself.
// eg. -saving something in a databse, writing to a file, making chnages to what is seen in a web app.

function add(x, y){
    return x + y;
}

const add2 = (x, y) => x + y;

// INPURE FUNCTONS/PROCEDURES

let counter = 0;

function increment(){
    counter++;
}

// this does not follow any of the must have requirements for the pure functions.
// increment can better be described as a procedure rather than a function.

// Why use Pure functions ?
// Reuseable
// composable
// Easy to test
// Easy to cache.
// (pure functions always produce same result for a given input so its easy to cache expensive function calls )

// Functional Programming is about 
// Eliminating state as much as possible and 
// Tightly controlling state whenever its needed.