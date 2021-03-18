function myFunction(deleteProp) { // Change this line
    // Only change code below this line
    var lion = {
        name: "Simba",
        legs: 4,
        tails: 1,
        roar: "roar-roar"
    }
    delete lion[deleteProp];
    return lion;
    // Only change code above this line
}
myFunction("roar"); // Change this line
console.log(myFunction("roar"));
module.exports = myFunction;