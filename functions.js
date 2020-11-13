// value of number grade1 will be beween 50 and 100
const grade1 = 50 + Math.random() * 50.0; // 50 + (0 - 50)

console.log(grade1);

// We want to transform the number grade to a letter grade.
// Number Grade         Letter Grade
// 90                   'A'
// 80                   'B'

if(grade1 >= 90){
    console.log('A');
} else if (grade1 >= 80){
    console.log('B');
} else if(grade1 >= 70){
    console.log('C');
} else if(grade1 >= 60){
    console.log('D');
} else {
    console.log('F');
}

// Now if we have more grades - grade2, grade3 for which we want to determine the letter grades what should we do
// copy this if...else code block for grade 2 and grade3 

// We can do this with functions
// we can write a function that converts the number grades to letter grades.

function letterGrade(grade){
    if(grade >= 90){
        return 'A';
    } else if (grade >= 80){
        return 'B';
    } else if(grade >= 70){
        return 'C';
    } else if(grade >= 60){
        return 'D';
    } else {
        return 'F';
    }
}
const grade2 = 50 + Math.random() * 50.0; // 50 + (0 - 50)
const grade3 = 50 + Math.random() * 50.0; // 50 + (0 - 50)

console.log(grade2, letterGrade(grade2));
console.log(grade3, letterGrade(grade3));

//---------------------------------------------------------

const name = 'James';

const greeting = greet1('Good Day', name);

console.log(greeting);

// I'm using the "greet" function on line 3 above, 
// but "greet" doesn't actually exist.
// You need to write the greet function so it returns
// 'Good Day James!'

function greet1(str, name){
    return str + " " + name + "!";
}
//---------------------------------------------------------

function greet (greeting, name){
    return `${greeting} ${name}`;
}

console.log(greet('Good morning', 'James'));

// What if we had a list of names and we wanted to create a list of greetings for each of these.
const friends = ['Nate', 'Jim', 'Scott', 'Dean'];
// Function/ tool for transforming list of values from one this to another.
// Array of names to an array of greetings
// map() function

const friendGreetings = friends.map(
    // but the function that we provide to map only took 1 parameter
    // the current element of the array (name in this case)
    // but greet takes two parameters
    // so how do we pass two parameters to the greet function
    // lets pass greet function to the map function
    greet
    )
    
    console.log(friendGreetings); // [ 'Nate 0', 'Jim 1', 'Scott 2', 'Dean 3' ]
    // greet() function is called with name as the first parameter(greeting) and index/location within the array as the second parameter (name)
    // we want to figure out a way to pass greeting into the greet function
    
    // funcitions can be returned from other functions like other values
    // In the greet function, where we are returning a string, we can return a function
    
    
    function greet2 (greeting){
        return function(name){
            return `${greeting} ${name}`;
        }
    }
    
    // Instead of having a function that takes two parameters and returns a string
    // we have a function that takes one parameter, greeting 
    // and returns a function that takes one parameter, name
    // the returned function returns a string that combines the greeting and name.
    // the log statement will also need to change, the greet function doesn't takes two parameters now.
    
    console.log(greet2('Good morning')('James'));

    const friendGreetings2 = friends.map(greet2);
    console.log(friendGreetings2); // [ [Function], [Function], [Function], [Function] ]
    
    // we can fix this by calling the greet2 function inside the map function passing in  the greeting 'Good morning!'.
    const friendGreetings3 = friends.map(greet2('Good evening'));
    console.log(friendGreetings3); // ['Good evening Nate', 'Good evening Jim', 'Good evening Scott', 'Good evening Dean']

    // HIGHER ORDER FUNCTION
    //  A function that takes a function as an input parameter and/or returns a function 
    // map() is a HOF because it takes a function as an input parameter.
    // greet() is a HOF because it returns a function.

    // greet() function
    // we are passing the 'greeting' parameter to the greet() function and 
    // referencing the 'greeting' paramter in the returned anonymous function 
    // this is called a 'closure'
    // closures are functions that can access and use variables that are not directly passed to the function because of the placement of the function relative to the variables.