function myFunction(myObj, checkProp) {
    // Only change code below this line
    if (myObj.hasOwnProperty(checkProp)) {

    
    return myObj[checkProp];
} else {
    return "Not Found";
}
    // Only change code above this line
}
    
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "title"));
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "song"));
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "genre"));
console.log(myFunction({title: "Titanic", song: "My heart will go on", genre: "drama"}, "actor"));
module.exports = myFunction;