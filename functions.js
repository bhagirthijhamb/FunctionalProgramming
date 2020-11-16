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
// CURRYING & PARTIAL APPLICATION
function greet (greeting, name){
    return `${greeting} ${name}`;
}

console.log(greet('Good morning', 'James'));

// What if we had a list of names and we wanted to create a list of greetings for each of these.
const friends = ['Nate', 'Jim', 'Scott', 'Dean'];
// Function/ tool for transforming list of values from one list to another.
// Array of names to an array of greetings
// map() function

const friendGreetings = friends.map(greet);
    // but the function that we provide to map only takes 1 parameter
    // the current element of the array (name in this case)
    // but greet takes two parameters
    // so how do we pass two parameters to the greet function
    // lets pass greet function to the function greet2 (greeting){
    
    
    console.log(friendGreetings); // [ 'Nate 0', 'Jim 1', 'Scott 2', 'Dean 3' ]
    // greet() function is called with name as the first parameter(greeting) and index/location within the array is getting passed as the second parameter (name)
    // map() function passes name as the first parameter and the index as the second parameter
    // we want to figure out a way to pass greeting into the greet function
    
    // functions can be returned from other functions like other values
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
    // calling  greet2() like this greet2('Good morning) returns a function that we call with 'James' as an argument.
    // This works good like this above but not with map() as below.

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
    // The parameter greeting can be used anywhere between opening and closing curly braces of the greet2() function (this is called the scope if the parameter)
    // Since return function is within the scope of the greeting parameter, it has access to it.

// EXERCISE
// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
];

/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
]; 
*/

// Solution found at:
// https://jsbin.com/vaqomiy/1/edit?js,console

const messages = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good'
}

function pointsToLetterGrade(points) {
    if(points >= 90){
        return 'a'; 
    } else if (points >= 80){
        return 'b';
    } else if (points >= 70){
        return 'c';
    } else if (points >= 60){
        return 'd';
    } else {
        return 'f';
    }
}

function feedBack(feedBackRules){
    return function(student){
        const grade = pointsToLetterGrade(student.grade);
        const message = feedBackRules[grade];
        return `${message} ${student.name}, you got an ${grade}`;
    } 
}

const gradeFeedback = studentGrades.map(feedBack(messages))

console.log(gradeFeedback);

// CURRYING
// Transformation of a function with multiple arguments to
// a function that takes a single argument and returns a function that takes the remaining arguments is called currying.
// the original greet function that took 2 arguments just didnt work with map()
// Howevr when we curried the greet function, it worked just fine with map().

// PARTIAL APPLICATION
// related with currying
// const friendGreetings3 = friends.map(greet2('Good evening'));
// when we call greet2() passing in the greeting 'Good evening', this is partial application
// PA is like specializing a more general function.

    // function greet2 (greeting){
    //     return function(name){
    //         return `${greeting} ${name}`;
    //     }
    // }

    const morningGreetingFunction = greet2('Good morning');
    // when we are passing a string 'Good morning', we are specializing  the returned function into essentailly a morningGreetingFunction.
    console.log(morningGreetingFunction('Nate')); // Good morning Nate 
    // Same way we can create a special afternoon or everningGreetinFunctions

    // CURRYING
    // is what you do to a function before you actually use that function.
    // whats done while designing/coding a function.

    // PARTIAL APPLICATION
    // whats done when you begin to use a function in part by applying some of the paramters the function needs but not all of them.
    // PA is what you are doing when you use a curried function in parts.

    const afternoonGreet = greet2('Good afternoon') // this is PA of the curried function

    // the constant afternoonGreet() is a function what can be called with  the final parameter 'name'
    // whats returned is a string that represents the afternoon greeting 
    // this is the PA of a curried function.

    // So do we always need curried function to do PA
    // Can you do PA without a curried function ? Yes you can
    // You could have a function that performs PA on a regular old function(a non-curried  function).

    // partial - open source library that allows us to do PA
    // add() is a function that is not curried. 
    // Its as regular old function that takes two parameters and  returns tha result of adding them together.

    function add(x, y){
        return x + y;
    }

    // Support we want to do PA of add function but we dont need to/want to make a curried function out of the add function.
    // I just want to pass first parameter to the add() function which will be the number 3.
    // One way to achieve PA of add() function is

    const add3 = partial(add, [3]);
    // whats returned by partial is a new function that just needs to be called with the  last parameter.
    // So we did PA here without ever having o deal with the curried function.

    // Currying is related to creating functions and when you are currying there is absence of data.
    // PA is related to consumig or using functions witha actual data.
    // You can use PA on curried functions as well as on regular functions with some sort of helper functions.

    // Dos the order of paramters to the curried function matter
        // function greet2 (greeting){
        //     return function(name){
        //         return `${greeting} ${name}`;
        //     }
        // }

    // In the greet2() function, with the map() function ,we want the last parameter to be the name because name is the paramter which the map() function would be supplying.

    // Ordering parameters for the curried function.
    // Any parameter that turns a more general function to a more specialised function should be the first parameter.
    // the greet() function before its called is a more general function.
    // if we pass 'Good afternoon tot he greet() function, we have a sort of specialised the greet() function to just an afternoonGreeting() function now.
    // the last piece of data should be the piece of data your function is acting on.
    // whats the piece of data you are acting on whe youare using greet() ona list of names.
    // grett() is acting on individual name that is passed on. SO the name 'Nate' is what is being acted on.

// currying is not the feature of the language.
// the quirky syntax that we used when we called greet2() for a single person.

    // function greet2 (greeting){
    //     return function(name){
    //         return `${greeting} ${name}`;
    //     }
    // }

    // console.log(greet2('Good morning')('Nate'));

// using two sets of opening and closing brackets is raather robust.
// imagine a curried fucntion that takes 4 parameters.
// Ramda library helps us with that.
