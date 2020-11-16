// Function Composition
// Making new functions out of other functions by combining the logic of other functions.

function slice(apple){
    return slicedApples;
}

function bake(slicedApples){
    return applePie;
}

// When the output from one pure function is the same type as the expected input to another pure function,we can compose them (join them)  

// Feed the output of slice right into the input of bake.
// we can join them/ compose them   

const makePie = compose(bake, slice);
const pie = makePie(apple);
// apple will be sliced by the slice function and baked by the bake functions.
// and the result of calling the new function makePie() is a baked pie

// Go to Ramda.html