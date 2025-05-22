// For...Of Practice
// Let's practice using for...of. I've provided you with an array called numbers.  Please use a for...of loop to loop over it, and print out the square of each value (the number multiplied by itself).

// NOTES:

// 1. Udemy's coding exercise platform does NOT support the ** operator.
// 2. You could accomplish this by using a while loop or a for loop, but please use a for...of loop! Unfortunately, I can't enforce the type of loop you use, but please I'm begging you to use a for...of.  I will hunt you down if you don't.  Thank you and have a great day!

// Your output should look like this:

// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81

// const numbers = [1,2,3,4,5,6,7,8,9];

// for (let number of numbers) {
//     console.log(number*number)
// }

// function rant(message) {
//     console.log(`hey,${message}`.toUpperCase())
//     console.log(`hey,${message}`.toUpperCase())
//     console.log(message.toUpperCase())
//     console.log(message.toUpperCase())

// }

// Multiple Args Exercise
// In some dice games like Craps, a roll of two 1's is called "Snake Eyes".  It's generally not a good roll.  Please write a function called isSnakeEyes, which accepts two numbers as inputs, representing two dice.  If the two numbers are both 1's, please print "Snake Eyes!" otherwise print "Not Snake Eyes!"

// isSnakeEyes(1,1) //Snake Eyes!
// isSnakeEyes(1,5) //Not Snake Eyes!
// isSnakeEyes(4,5) //Not Snake Eyes!
// Hint: Normally a function will return a value, but for the sake of having this work with the Udemy interpreter we will be using console.log() instead of return, to print the output.

// function isSnakeEyes(number1, number2){
//     // console.log(number1, number2)
//     if(number1 === 1  && number2 === 1){
//         console.log('Snake Eyes!')
//     }

//     else{
//         console.log('not Snake Eyes!')
//     }

// }

// Last Element Exercise
// Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.

// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

// function lastElement(Array){
//     if ( Array === 0 ) {
//         return null;
//     }

//     return Array[Array.length - 1];

// }

// function lastElement(arr) {
//     if (arr.length > 0) {
//       return arr[arr.length - 1];
//     }
//     return null;
//   }

// Capitalize Exercise
// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"
// Hints:

// Remember that strings are immutable, meaning that you cannot simply change the first letter in the original string.  You will need to make a new string that you return.

// Single out the first letter and capitalize it. (use a string method to help!)

// Add that first letter to the rest of the original string, sliced to omit the original first letter (use a string method to help!)

// For example: 'eggplant' becomes 'E' + 'ggplant'

// function capitalize(string){
//     if (string.length === 0) {
//         return "";
//     }

//    else {  let upc = string[0].toUpperCase()
//           let slc = string.slice(1)

//         return upc + slc
// }

// }

// Sum Array Exercise
// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.

// sumArray([1,2,3]) // 6
// sumArray([2,2,2,2]) // 8
// sumArray([50,50,1]) // 101
// Hints:

// You'll need a variable to keep track of the total.  It should start out as zero.

// Loop over the array and for each element, add it to the total variable.

// After you have added every number to total, return total.

// function sumArray(Num) {

//     let sum = 0

//     for (let i = 0; i < Num.length; i++) {
//         sum += Num[i];

//     }

//     return sum
// }

// Days Of The Week Exercise
// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.

// Hint: store the days of the week in an array, or use an object with numerical keys.  When the function is called, plug the number into the array/object you've created to retrieve the corresponding day name and then return that value.

// returnDay(1) // "Monday"
// returnDay(7) // "Sunday"
// returnDay(4) // "Thursday"
// returnDay(0) // null

// function returnDay(Nums) {
//     const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//     // Check if the input is valid (between 1 and 7)
//     if (Nums >= 1 && Nums <= 7) {
//         return days[Nums - 1]; // Return the corresponding day
//     } else {
//         return null; // Return null for invalid input
//     }
// }

// }

// FUNCTION SCOPEEEE

// function helpme(){
//     let msg = "acgdfbk"
//     msg;
// }

// // msg;

// let totalEggs = 45
// function collectEggs(){
//    totalEggs = parseInt(prompt("Enter enter valid syntax of eggs:"));
//     while (isNaN(totalEggs)) {
//         totalEggs = parseInt(prompt("Enter number of eggs:"));

//    }
//     console.log(totalEggs);
// }

// console.log(totalEggs)
// collectEggs();
// console.log(totalEggs)

// LEXICAL SCOPING

// function makeFunc(){
//     const name = "sdr"
//     function displayName(){
//         console.log(name);
//     }

//     return displayName
// }

// const myFunc = makeFunc()
// myFunc()

// HIGHER ORDER FUNCTION

// function callTwice(func){
//     func()
//     func()
// }

// function time10(f){
//     for (let i = 0; i < 10; i++) {
//         f()
//    }
// }

// function rollDie(){
//     const roll = Math.floor( Math.random() * 6) +1
//     console.log(roll)
// }

// callTwice(rollDie)

// practiceeeee Function scopeee

// function outer() {
//     let outerVar = "I’m outside!";
//     // console.log(innerVar);      // ❌  it is written in last bcz nothing gonna execute after this throws error &&& innerVar is declared after the console.log(innerVar) in outer() — so it doesn't exist in that scope.

//              function inner() {
//               let innerVar = "I’m inside!";
//              console.log(outerVar);  // ✅
//              }

//       inner();
//     // inner();  if this is missing, inner() is never called
//     console.log(innerVar);      // ❌
// }

// outer();

// 🧠 Question: Nested Greetings
// Write a function called greetUser that defines a nested function inside it called greetByName.

// The outer function greetUser should accept one argument: name.

// The inner function greetByName should take no arguments, but it should use the name variable from the outer function to print:

// "Hello, [name]!"

// Call the inner function from within greetUser.

// function greetUser (){
//     let outerUser = prompt()

//     function inner() {
//         let Innername = "hello"
//         console.log(outerUser)
//     }
//     inner()
// }
// greetUser()

// 🧠 Mini Challenge: Personalized Greeting with Mood
// Write a function called greetUserMood that:

// Asks the user for their name using prompt()

// Then asks how they are feeling today (also using prompt())

// Inside the main function, define an inner function called displayGreeting

// When you call displayGreeting(), it should log:

// Hello [name]! Glad to know you're feeling [mood] today!

// ✅ Use variables to store both the name and the mood
// ✅ Use inner function and outer function concepts
// ✅ No need for return values, just use console.log

// function greetUser (){
//     let outerUser = prompt()

//     function inner() {
//         let Innername = "hello"
//         console.log(outerUser)
//     }
//     inner()
// }
// greetUser()

// function userName() {
//     let Name = `hello ${prompt("Enter your name:")}`;
//     let mood = ""; // ✅ Declare mood in the correct scope

//     function moodUser() {
//          mood = `Glad to know you're feeling ${prompt("Mood:")} today `;
//     }
//     moodUser()

//     function displayGreeting(){
//         // let Greeting = ""
//         console.log(Name)
//         console.log(mood)
//     }
//     displayGreeting()

// }
// userName()

// function userName() {
//     let Name = `Hello ${prompt("Enter your name:")}`;

//     function moodUser() {
//         let mood = moodUser();
//         return `Glad to know you're feeling ${prompt("Mood:")} today!`;
//     }

//     console.log(Name);
//     console.log(mood);
// }

// userName();

// function userName() {
//     let Name = `Hello ${prompt("Enter your name:")}`;

//     function moodUser() {
//         let mood = moodUser();
//         return `Glad to know you're feeling ${prompt("Mood:")} today!`;
//     }

//     console.log(Name);
//     console.log(mood);
// }

// userName();

// function br () {
//     const hero = ['suuip', 'fhdf', 'hsdfh']

//     function help(){
//         let gg = 'hello'

//           function inner(){
//           let heros = hero
//          console.log(`hellppp ${gg} ${hero}`)
//     }
//     inner()

//     }
//     help()

// }
// br()

// returning function

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand >= 0.5) {
//     return function () {
//       console.log("yaahuuu");
//     };
//   }
//      else{
//       return function(){
//         alert('virusuususususus')
//         alert('virusuususususus')
//         alert('virusuususususus')
//       }
//      }
// }
// makeMysteryFunc();

// function isBetween(num){
//     return  num >= 50 && num<= 100
// }
// function isBetween2(num){
//     return  num >= 1 && num<= 10
// }

// function makeBetweenFunc(min,max) {
//   return function(num){
//     return num >= min && num<= max
//   }

// }
// const isChild = makeBetweenFunc(0, 18);
// const adult = makeBetweenFunc(19, 80);
// const senior = makeBetweenFunc(81, 200);

// const isChild = function(num){
//   return num >= 100 && num <= 200
// }

// METHOOODSSS

// Methods Exercise
// Define an object called square, which will hold methods that have to do with the geometry of squares. It should contain two methods, area and perimeter

// area should accept the length of a side (all sides are the same in a square) and then return the side squared.

// perimeter should accept the length of a side and return that side multiplied by 4.

// const square = {
//   area: function(x){
//     return x*x
//   },

//   perimeter: function(x){
//     return x*4
//   }

// }

// const square = {
//   area: x => x * x,
//   perimeter: x => x * 4
// };
// console.log(square);

// console.log(square.area(5));      // logs: 25
// console.log(square.perimeter(5)); // logs: 20

// The Mysterious Keyword 'this'

// const user = {
//     userName: 'SDROY',
//     price: 599,

//     welcomeMessage: function (){
//         console.log(`${this.userName}, welcome sir`);
//         // console.log(this);
//     }
// }

// user.welcomeMessage()
// user.userName = 'sonu'
// user.welcomeMessage()

// console.log(this);

// const Name = () => {
//     let userName = 'sdroy'
//     console.log(this.userName);
// }

// Name()

// const addTwo =  (num1, num2) => {
//     return num1 + num2
// }

// const addTwo =  (num1, num2) => (num1 + num2)

// const addTwo =  (num1, num2) => num1 + num2

// const addTwo =  (num1, num2) => ({username : 'sdr'})

// console.log(addTwo(5,8))

// Egg Laying Exercise
// Define an object called hen.  It should have three properties:

// name should be set to 'Helen'

// eggCount should be set to 0

// layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG".  You'll need to use this.

// hen.name // "Helen"
// hen.eggCount // 0
// hen.layAnEgg() // "EGG"
// hen.layAnEgg() // "EGG"
// hen.eggCount // 2

// const hen = {
//     name : "Helen",
//     eggCount : 0,
//     layAnEgg: function (){
//       this.eggCount += 1;
//       return 'EGG'

//     }

// }

// hen.layAnEgg();
// // hen.layAnEgg();
// console.log(hen.eggCount);

// Using Try/Catch

// try {
//     hello.toUpperCase()
// } catch{
//     console.log('ERRRORRR>>>');
// }
// hello.toUpperCase()

// console.log('ssupp');

// function userName(name){
//     try{
//    console.log(name.toUpperCase().repeat(3));
//     } catch (e){
//         // console.log(e);
//         console.log('enter valid name');
//     }
// }

// MAPS AND FOR EACH LOOOP

// const heros = ["Iron-Man", "Captain-America","Black-Widow","Jarvis"]

// const hero = heros.forEach( (items) => {
//     // console.log(items);
//     return items
// } )

// console.log(hero);

// Map Practice
// It's time to get practice with the map method!

// Define a variable named firstNames and assign it to the result of mapping over the existing array, fullNames, so that firstNames contains only the first names of the Harry Potter characters from the fullNames array.

// e.g.,

// console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

// Please note:

// The fullNames array is an array of objects with each object containing properties for the first and last names of each character. You may need to click the "Reset code" link if you do not see the fullNames array pre-loaded into the exercise's index.js file.

// This exercise has been updated, you may see Q&A threads from this lecture that relate to the original exercise which no longer exists. They can be ignored.

// const fullNames = [
//   { first: "Albus", last: "Dumbledore" },
//   { first: "Harry", last: "Potter" },
//   { first: "Hermione", last: "Granger" },
//   { first: "Ron", last: "Weasley" },
//   { first: "Rubeus", last: "Hagrid" },
//   { first: "Minerva", last: "McGonagall" },
//   { first: "Severus", last: "Snape" },
// ];

// const firstNames = fullNames.map(function(name){
//     return name.first

// })

// console.log(firstNames)

// const greet = name => (`hey ${name}`)
// console.log(greet("luna"));

// SETIMEOUUTT

// console.log('hii');
// setTimeout(() => {
//     // console.log('hello');
// }, 5000);

// console.log('after')

// const id = setInterval(() => {
//     console.log(Math.random()*6 + 10);
// }, 3000);

// clearInterval(id)

// Filter number

// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings).  It should return a new array, containing only the usernames that are less than 10 characters. For example:

// validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// // => ["mark", "carrie98", "MoanaFan"]

// Note: The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,

// function validUserNames(usernames) {
//   // your code here
// }

// or if you want to get fancy with an arrow function:

// const validUserNames = usernames => // your code here;

// There is no need to define an actual array of usernames, that part is done for you behind the scenes.

// const usernames = [
//   "bugHunter404",
//   "jsDev",
//   "loopWizard",
//   "debugSensei",
//   "tiny",
//   "theCallbackHellMadeMeForgetMyOwnName",
// ];

// function validUserNames(arr) {
//     return arr.filter((name) => name.length < 10);
// }

// const valid = validUserNames(usernames);
// console.log(valid);

// const myNums = [1,2,3,65,5,85,8,4,]

// function newNums(num) {
//     return num.filter((nm) => nm <10)
// }

// const result = newNums(myNums)
// console.log(result);

// const myNums = [1, 2, 3, 65, 5, 85, 8, 4];

// function filterSmallNums(arr) {
//     return arr.filter((num) => num < 10);
// }

// const result = filterSmallNums(myNums);
// console.log(result);

// 🧠 Question 1: Filter - The Bouncer at the Club
// You’re building a digital bouncer for a club. You’ve got a list of people’s ages, and only those 21 and older can get in. Write a function using .filter() to return the list of people who are legally allowed to party.

// const ages = [16, 21, 18, 25, 30, 17, 20, 22];

// // Write a function that returns only the ages 21 or older
// Hint: You're filtering for ages >= 21. No fake IDs allowed 😎

// const ages = [16, 21, 18, 25, 30, 17, 20, 22];

// function filterAge(arr) {
//     return arr.filter((age)=> age >= 21)
// }

// const results = filterAge(ages)
// console.log(results);

// 🧠 Question 2: Map - The Price Tag Formatter
// You’ve got a list of item prices. You want to turn them into formatted strings that say “$X.XX” using .map(). For example, 19.99 becomes "$19.99".

// const prices = [5, 12.5, 99.99, 3.1, 0.99];

// // Write a function that returns: ["$5.00", "$12.50", "$99.99", ...]
// Hint: You’ll want to use .toFixed(2) inside the map.

// const prices = [5, 12.5, 99.99, 3.1, 0.99];

// const priceTag = prices.map((num)=> "$" + num.toFixed(2))

// console.log(priceTag);

// 🧠💥 Ultimate Combo Challenge: Sale Squad
// You run an online store and have a list of products with their prices. Some are too expensive to put on sale — so you want to:

// Filter out anything that costs more than $100 (we're not that generous),

// Map the remaining items into nice-looking price tags like “Sale: $29.99!”

// Here’s your starter data:

// javascript
// Copy
// Edit
// const productPrices = [29.99, 150, 75.5, 200, 10, 99.99, 300, 55];
// 🧩 Your Task:
// Write a function that:

// Filters out any product over 100

// Returns an array of strings like:
// "Sale: $29.99!", "Sale: $75.50!", etc.

// 💡 Hint to get you rolling:
// Use .filter() first to narrow it down, then .map() to format each one.

// const productPrices = [29.99, 150, 75.5, 200, 10, 99.99, 300, 55];

// const finalProductprice = productPrices.filter((num) => num < 100 ).map(price => "sale $" + price.toFixed(2))

// console.log(finalProductprice);

// Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.  Use some or every to help you do this!  (only one of them is actually useful here)

// allEvens([2,4,6,8]) //true
// allEvens([1,4,6,8]) //false
// allEvens([1,2,3]) //false

// const array = [1,2,3,4,5,6,7,8,9,10]

// function allEvens(arr) {
//     return arr.every( bk => bk % 2 === 0 )

// }

// console.log(allEvens([2, 4, 6]));
// console.log(allEvens([2, 3, 4]));

// const myCart = [
//   {
//     itemName: "ip15",
//     price: 64999,
//   },

//   {
//     itemName: "ip16",
//     price: 74999,
//   },

//   {
//     itemName: "ip13",
//     price: 40999,
//   },
// ]


// const toPay = myCart.reduce( (acc, item) => acc + item.price,0)

// console.log(toPay);

// default param

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// console.log(rollDie());


// function greet(person, msg = "hey there", punc = '!' ) {
//     console.log(`${msg}, ${person} ${punc}`);
// }

// greet("sdr");        


 

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`gold to ${gold}`);
//     console.log(`silver to ${silver}`);
//     console.log(`thanks to ${everyoneElse}`);
// }

// raceResults("Alice", "Bob", "Charlie", "Dave", "Eve");
