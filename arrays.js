// Modify arrays in immutable ways
const meals = [
    { id: 1, description: 'Breakfast', calories: 420 },
    { id: 2, description: 'Lunch', calories: 520 }
]

const meal = { id: 3, description: 'Dinner', calories: 400 }

const updatedMeals = [ ...meals, meal ];
console.log(meals, updatedMeals);

// UPDATING ARRAYS
// What if we want to update something in one object of meals array
// like update the description of meal with id: 2

// map function
const numbers = [1, 2, 3];
// double every number in the array
// the common tool to translform data in arrays is functions

function double(number){
    return 2 * number
}
// how do we apply double function to every item in the array
// map function takes the transformation function as the input parameter
// function takes a function as an argument that us why map() is a higher order function
const doubledNumbers = numbers.map(double);
console.log(doubledNumbers);

const updatedMealsDescription = updatedMeals.map(updateDescription);

function updateDescription(meal){
    if(meal.id == 2){
        return {
            ...meal,
            description: 'Early Lunch'
        }
    }
    return meal;
}
console.log('Updated Meals Description', updatedMealsDescription)

// FILTER ITEMS FROM ARRAY
const filteredMeals = updatedMeals.filter(function(meal){
    return meal.id != 1;
})
console.log('Filtered meals', filteredMeals);

//--------------------------------------------------
// 1. create a constant named friends, 
// which is an array that contains 2 
// names of your choosing.

// 2. Create a new constant named updatedFriends, 
// which includes the friends array values plus 
// one additional name

// 3. Create a new constant named friendNameLengths, 
// which is based on the array updatedFriends, 
// but instead of having the friends names, 
// have the array store the length of each persons name.

// 4. Create a new constant named shorterNamedFriends, 
// which will be a list of the friends except the friend with the longest name.

// 5. Print each variable to the console.

// Solution can be seen at: 
// https://jsbin.com/nevonet/1/edit?js,console

const friends = ['Mansi', 'Amir'];

const updatedFriends = [ ...friends, 'Piyush' ];

const friendsNameLength = updatedFriends.map(updateLength);
function updateLength(name){
    return name.length;
}
console.log('Length', friendsNameLength);

const maxFriendNameLength = Math.max(...friendsNameLength);
console.log(maxFriendNameLength);

const shorterNamedFriends = updatedFriends.filter(function(name){
    return name.length < maxFriendNameLength;
})
console.log(shorterNamedFriends);

// Reduce function
// Summarize info on arrays
const grades = [60, 55, 80, 90, 99, 92, 75, 72];
// Average grade

//................................
const numbers1 = [1, 2, 3];

function sum(x, y){
    return x + y;
}

const total = numbers1.reduce(sum)
console.log(total);
//................................

const totalOfGrades = grades.reduce(sumGrades);

function sumGrades(acc, grade){
    return acc + grade;
}

const count = grades.length;

// How many students are in A's, B's, C's....
const letterGradeCount = grades.reduce(groupByGrade, {});

function groupByGrade(acc, grade){
    // destructure the letter grades from the accumultor
    // the first time groupByGrade() function is called, acc will only be an empty object
    // there will be no values for a through f and a, b, c, d, e, f will be undefined
    // to handle this we set all letter grades to initial default value of 0
    // defaulting a destructured value
    const { a = 0, b = 0, c = 0, d = 0, e = 0, f = 0 } = acc;
    if(grade >= 90){
        return { ...acc, a: a + 1 }
    } else if(grade >= 80){
        return { ...acc, b: b + 1 }
    } else if(grade >= 70){
        return { ...acc, c: c + 1 }
    } else if(grade >= 60){
        return { ...acc, d: d + 1 }
    } else {
        return { ...acc, f: f + 1 }
    }
}

console.log(totalOfGrades, totalOfGrades/count, letterGradeCount); // 623 77.875

// Functional Programming for Beginners Exercise

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}
// 
// TIP: checkout computed properties discussed here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// solution can be found at:
// https://jsbin.com/dehiqux/1/edit?js,console

const numberOfReview = reviews.reduce(countReviews, {});

function countReviews(acc, review){
    const count = acc[review] || 0;
    return { ...acc, [review]: count + 1 };
}
console.log(numberOfReview);

const fruits = ['apple', 'apple', 'banana', 'coconut', 'coconut', 'coconut', 'dragon fruit', 'dragon fruit']

const numberOfFruits = fruits.reduce(function (acc, fruit){
    const count = acc[fruit] || 0;
    return { ...acc, [fruit]: count + 1}
}, {})

console.log(numberOfFruits);


