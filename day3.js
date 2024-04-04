let destructMe={
    title: "Intro to JavaScript",
    body: "I really wish JavaScript had static type checking",
    createdOn: new Date(),
    author: "Kevin Beier",
    topic: "Programming",
    tags: ["JS", "Async", "Dynamic Types"]
}

function destructed({ title, body, author, ...other}){
    console.log(title, body, author)
    console.log(other)
}

destructed(destructMe);

let friendObj1 = {
    name: 'Jack',
    friends: ['John', 'Joe', 'Jim']
};

let friendObj2 = {
    name: 'Kylie'
}

friendObj1.friends.push('Jeremy');
console.log(friendObj1)

friendObj2.firends?.push('Kendall');
console.log(friendObj2);

let movies = [
    { id: 1, title: 'Oppenheimer', releaseYear: 2023, studio: { name: 'Warner Bros'}},
    { id: 2, title: 'The Dark Knight', releaseYear: 2009, studio: { name: 'Sony'}},
    { id: 3, title: 'Gladiator', releaseYear: 2001}
]

console.log(movies);

for (let movie of movies){
    console.log(movie.studio?.name);
}

// Condition ? ifTrue : ifFalse

for (let movie of movies){
    console.log(movie.studio ? movie.studio.name : undefined)
}


let movies2 = [
    { id: 1, title: 'Oppenheimer', releaseYear: 2023, studio: { name: 'Warner Bros', address: {street: 'Rodeo Dr', city: 'Los Angeles'}}},
    { id: 2, title: 'The Dark Knight', releaseYear: 2009, studio: { name: 'Sony', address: {street: 'Sony'}}},
    { id: 3, title: 'Gladiator', releaseYear: 2001}
]

for (let m of movies2){
    console.log(m.studio?.address?.city);
}

// for (let m of movies2){
//     console.log(m.studio ? m.studio.address ?. m.studio.address.city? : undefined : undefined);    
// };



console.clear()
// Nullish Coalescing Operator (??) 

/* Often times we want to check the value of something and if it is undefined or null, we want to use a default value instead. The Nullish Coalescing Operator `??` allows just that. */

console.log(`${friendObj1.name}: ${friendObj1.friends ?? 'has no friends' }`)
console.log(`${friendObj2.name}: ${friendObj2.friends ?? 'has no friends' }`)

for (let movie of movies){
    console.log(`${movie.title} released in ${movie.releaseYear} -- Studio: ${movie.studio?.name ?? 'Independent' }`)
};

console.clear()

// Object Equality
// In JAS, two objects are considered equal ONLY if they refer to the same object in memory

let objX = {id: 1};
let objY = {id: 1};

console.log(objX == objY); // false
console.log(objX === objY); // false

let objZ = objX; // stating they are the same to mem

console.log(objX === objZ); // true - because stated above, they are the same in memory 


// Same thing applies to Array - because an Array is an object 



// -----------
// Checking for Empy Objects & Empty Arrays ! 
let testObj = {};

if (testObj){
    console.log('testObj is true')
} else {
    console.log('testObj is false')
};

// Empty Objects & Arrays will still evaluate to true (unlike Python where if a string is emtpy or number is 0, they will evaluate to False) 


// With an Array, to see if it is emtpy, you can use the .length property
// All non-zeros are true, but zero is still false in JS 
let testArr = []

if (testArr.length){
    console.log('The array is not empty')
} else {
    console.log('The array is empty')
}; 

// With an Object, first access the keys of the object, and get the length of that
// Onject.keys(obj) --> will return an array of keys

testObj = {
    a: 123,
    b: 456
}

console.log(Object.keys(testObj));

if (Object.keys(testObj).length){
    console.log('The testObj keys have length')
} else {
    console.log('The testObj keys are empty')
}


console.clear()
// Looping Over Objects ! 

/* In python, we have .keys .values and .items. In JS, we have .keys .values and .entries, but instead of them being instance methods on the Dictionary class (like in python), they are static methods of the Object Class (meaning they don't work on the instance but they do work on the class itself).*/ 

let person1 = {
    name: 'Janet',
    city: 'Louisville',
    isGoodCoder: true
};

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));


// Traditional For Loop for Objects -- Pre ES6...
for (let i=0; i < Object.keys(person1).length; i++){
    console.log(i)
    console.log('Key:', Object.keys(person1)[i])
    console.log('Value:', Object.values(person1)[i])
    console.log('Value2:', person1[Object.keys(person1)[i]])
};

// ES6 marked the introduction for the for... in loop!
// for.... in loop will loop over the keys of an object 

// for (let varName in objectName){
    // do stuff
// }

for (let key in person1){
    console.log(key) // to get KEY
    console.log(person1[key]) // to get VALUE at a given KEY
};

// for ...in vs for ...of 
// FOR IN --> INDEX
// FOR OF --> VALUE

let euroCountries = ['Spain', 'France', 'England', 'Germany', 'Poland', 'Italy']

console.log('for...of')
for (let country of euroCountries){
    console.log(country)
} // returns every country in array

console.log('for...in')
for (let country in euroCountries){
    console.log(country)
} // returns every index of each element in array


// Array.isArray(object) -- to determine if an object is an array:

teststr = ''
testarr = []

console.log(Array.isArray(teststr)); // false 
console.log(Array.isArray(testarr)); // true


console.clear()
// Returning an Object from an Arrow Function (implicitly)

// Normal function:
function createArray(){
    return [1, 2, 3, 4]
}
let returnedArr = createArray()
console.log(returnedArr);

// Arrow Function
const createArrayArrow = () => {
return [1, 2, 3, 4]
};
let returnedArr2 = createArrayArrow()
console.log(returnedArr2);

// If it's a ONE LINER, you can get rid of the 'return' and the '{}'
const createArrayArrow2 = () => [1, 2, 3, 4];
let returnedArr3 = createArrayArrow2()
console.log(returnedArr3);


// With an Object:
// Normal Function:
function createObj(){
    return {id: 123, name: 'Coding Temple'}
}

let returnedObj = createObj();
console.log(returnedObj);

// Arrow Function:
// If you want to implicity return an object in an ARROW function, wrap it in paranthesis
const createObjArrow = () => ({id: 123, name: 'Coding Temple'})
let returnedObj2 = createObjArrow();
console.log(returnedObj2);


// THIS !!!
// In JS, there is a special keyword called 'this' 
// Refers to the context where a piece of code is supposed to run 

// Let's say we have an object...
let thisObject = {
    firstName: 'Zach',
    lastName: 'Edey',
    fullNameRegular: function(){return this.firstName + ' ' + this.lastName},
    fullNameArrow: ()=> this.firstName + ' ' + this.lastName
}

console.log(thisObject);

console.log(thisObject.fullNameRegular()); // Zach Edey
console.log(thisObject.fullNameArrow()); // undefined undefined 
// this happens because of WHERE 'this' is defined 


function sayHello(){
    return 'Hello ' + this.name
}
let p1 = {
    name: 'Franklin',
    age: 22,
    greet: sayHello
};
let p2 = {
    name: 'Danielle',
    age: 33,
    greet: sayHello
};

console.log(p1.greet());