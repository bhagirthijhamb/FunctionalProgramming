// value of number grade1 will be beween 50 and 100
const grade1 = 50 + Math.random() * 50.0; // 50 + (0 - 50)

console.log(grade1);

// We wnt to transform the number grade to a letter grade.
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

const greeting = greet('Good Day', name);

console.log(greeting);

// I'm using the "greet" function on line 3 above, 
// but "greet" doesn't actually exist.
// You need to write the greet function so it returns
// 'Good Day James!'

function greet(str, name){
    return str + " " + name + "!";
}