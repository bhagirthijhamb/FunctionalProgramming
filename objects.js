// 1. create a meal object for a snack
// print both the snacks description
// and calories to the console

/*
   2. create a new constant named 
   updatedCalories, setting it to 150
   plus the calories used in the above
   meal object.
   Print the value of updatedCalories 
   to the console.
   
   Note: use the dot notation syntax as
   part of the expression
*/

// Completed exercise at 
// https://jsbin.com/cojacal/1/edit?js,console

const meal = {
    description: 'lunch',
    calories: 200,
    date: new Date(2020, 10, 12)
}

console.log(meal.description);
console.log(meal.calories);
console.log(meal.date.toDateString())

const updatedCalories = meal.calories + 150;
console.log(updatedCalories);

// Make changes to objects/records in an immutable way

const meal1 = {
    id: 1,
    description: 'Breakfast'
}
// update the meal object without mutating it
// take what is alread there and add calories to it

const updatedMeal1 = {
    id: meal1.id,
    description: meal1.description,
    calories: 600
}

console.log(meal1, updatedMeal1);

// if updatedMeal had 10 more properties, we would have to manually update those.

// Spread operator
const updatedMeal2 = {
    ...meal1,
    description: 'Brunch',
    calories: 700
}
console.log(meal1, updatedMeal2);

// Destructuring
// const description = updatedMeal2.description;
// const calories = updatedMeal2.calories;

const { description, calories} = updatedMeal2;

console.log(description, calories);

// Deleting the existing property
const { id, ...mealWithoutId } = updatedMeal2;

console.log(mealWithoutId);

//---------------------------------

const meal3 = {
  description: 'Dinner',
};
// 1. In an Immutable way, add a property to the
// meal called calories setting it's value to 200,
// then log the result to the console
const meal3WithCalories = {
    ...meal3,
    caloriess: 200
}
console.log('meal3WithCalories - ', meal3WithCalories)
// 2. In an Immutable way, increase the calories 
// by 100 and print the result to the console
const meal3WithIncreasedCalories = {
    ...meal3,
    caloriess: meal3WithCalories.caloriess + 100
}
console.log('meal3WithIncreasedCalories - ', meal3WithIncreasedCalories);

// 3. In an Immutable way, remove the calories property and log the result to the console
const { caloriess, ...meal3WithoutCalories } = meal3WithIncreasedCalories;
console.log(meal3WithoutCalories);

// See solution at: https://jsbin.com/sunewil/edit?js,console
