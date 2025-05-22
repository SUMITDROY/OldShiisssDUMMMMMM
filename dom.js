// The dom

// document.getElementsByTagName('img')
// const allImages = document.getElementsByTagName('img')
// allImages[1]



// function testScope() {
//     var a = 5;
//     if (true) {
//         let a = 10;
//         var b = 20;
//         const c = 30;
//     }
//     console.log(b); // What will this print?
//     // What happens if you try to log b or c here?
// }
// testScope();













// Sure! Here's the approach without giving the full answer:

// Select the container: Use JavaScript to grab the container <div> from the DOM (like with getElementById or querySelector).

// Use a loop: Set up a loop that runs exactly 100 times (for example, a for loop from 0 to 99).

// Create a button: Inside the loop, for each iteration, create a new <button> element using document.createElement('button').

// Add text: Set some text inside the button using the .innerText or .textContent property (it can just be something like "Button" + number).

// Append to container: Add each new button to the container using .appendChild().

// That's the general structure!
// Would you like me to also suggest a way to make the buttons look a little different from each other (like numbering them)?


// <!--DO NOT TOUCH THIS FILE PLEASE!-->
// <h1>Look At All My Buttons!</h1>
// <div id="container">

// </div>


// <!--LEAVE THE BELOW CODE ALONE TOO, PLEASE! ALSO, NO NEED TO STUDY THE BELOW CODE, IT'S JUST AN INNER MECHANISM TO MAKE THIS CODING EXERCISE WORK FULLY!-->
// <script>(function(arr){arr.forEach(function(item){if(item.hasOwnProperty('append'))return;Object.defineProperty(item,'append',{configurable:true,enumerable:true,writable:true,value:function append(){var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)));});this.appendChild(docFrag);}});});})([Element.prototype,Document.prototype,DocumentFragment.prototype]);</script> 
// </body>




// const container = document.getElementById('#container')
// // const div = document.getElementById('div')
// for (let i = 0; i < 100 ; i++) {
//     let btn = document.createElement('button') 
//     btn.innerText = 'daf';
//     container.appendChild(btn);
// }



// form eventss prevent deafultss



// const form = document.querySelector('#formm')
// const input = document.querySelector('#product')
// const input2 = document.querySelector('#qty')
// const list = document.querySelector('#list')
// form.addEventListener("submit", function(e){
//     e.preventDefault()
//     const catName = input.value
//     const newLi = document.createElement("LI")
//     newLi.innerText = catName
//     console.log(newLi);
//     list.append(newLi)
//     input.value = ''
// })


// GL as in FORM
// const GL = document.querySelector('#GL')
// const list = document.querySelector('#list')

// GL.addEventListener('submit', function(e){  
//     e.preventDefault()


//     const proInput = GL.elements.product
//     const qtInput = GL.elements.qty
//     const pro = GL.elements.product.value
//     const qt = GL.elements.qty.value

//     const newLi = document.createElement("LI")
//     list.append(newLi)
//     newLi.innerHTML = `${qt} ${pro}`;

//     proInput.value = '';
//     qtInput.value = '';

// })





// const input = document.querySelector('input')
// const h1 = document.querySelector('h1')

// input.addEventListener('change', function(e){
//     console.log('times');

// })

// input.addEventListener('input', function(){
//     if (input.value === '') {
//         h1.innerText = `Grocery List`
//     }
//    else{
//     h1.innerText = `Welcome, ${input.value}`;}

// })

// input.addEventListener('input', function () {
//     if (input.value === '') {
//       heading.innerText = `Enter Your Username`
//     } else {
//       heading.innerText = `Welcome, ${input.value}`;
//     }







// promises

// new Promise ((resolve, reject) => {
//    reject()
// })

// const fakeRequest = ((resolve, reject){

// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random()
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('getting clear');
//             }
//             else {
//                 reject('err')
//             }
//         }, 1000);
//     })
// }

// const req = fakeRequest()
// console.log(req);

// fakeRequest('https://example.com')
//     .then((data) => {
//         console.log('doneedddd');
//         console.log('data is', data);
//     })
//     .catch((err) => {
//         console.log('err', err);
//     })


// const delayColor = ((color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve()
//         }, delay);
//     })
// })

// delayColor('red', 2000)
//     .then(() => delayColor('yellow', 1000))
//     .then(() => delayColor('red', 1000))
//     .then(() => delayColor('yellow', 1000))
//     .then(() => delayColor('red', 1000))
//     .then(() => delayColor('yellow', 1000))
//     .then(() => delayColor('red', 1000))


// async function rainbow() {
//     await delayColor('red', 1000)
//     console.log('hello');
//     await delayColor('orange', 1000)
//     await delayColor('green', 1000)
//     console.log('ssssuppp');
//     await delayColor('blue', 1000)
//     await delayColor('violet', 1000)
//     return 'donee'
// }

// rainbow()
//     .then(() => console.log('enddd'))


// async function printRainbow(){
//     await rainbow()
//     console.log('enddd');
// }



// const login = async (username, password) => {
//     if (!username || !password) throw 'oopss'
//     if (password === 'sdr' && username === 'sdr') return 'Welcome!'
//     throw 'invalid pass or username'
// }

// const username = prompt('Enter username:');
// const password = prompt('Enter password:');


// login(username , password)
//     .then(msg => {
//         console.log('logeedin', msg);
//     })

//     .catch(err => {
//         console.log("err", err);
//     })






// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * (4500)) + 500;
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject('cnn timeout')
//             } else {
//                 resolve(`your fakedata ${url}`)
//             }
//         }, delay);
//     })
// };

// async function MakeTworequest() {
//     try {
//         let data = await fakeRequest('/page1')
//         console.log(data);
//         let data2 = await fakeRequest('/page2')
//         console.log(data2);
//     } catch (e) {
//         console.log('gotcha', e);
//     }
// }




// AJAAX AND FETCHH APIS JSON AXIOS




// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         console.log('resolve', res);
//         return res.json()
//     })
//     .then(data => console.log('json', data))

//     .catch((e) => {
//         console.log('err', e);
//     })


// axios.get("https://jsonplaceholder.typicode.com/posts")
// .then((res) => {
//     console.log("response",res);
// })
// .catch((e) => {
//     console.log("erroe",e);
// })


// const prac = async (userId) =>{
//     try{
//         const res = await axios.get(`https://jsonplaceholder.typicode.com/posts${userId}/`)
//         console.log(res.data);
//     } catch(e){
//         console.log('err',e);
//     }
// }

// prac(5)
// prac(10)


// const form = document.querySelector('#searchform')
// form.addEventListener('submit', async function (e) {
//     e.preventDefault()
//     try {
//         const searchTerm = form.elements.query.value
//         const config = { params: {q: searchTerm}, Headers: {} }
//         const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
//         disImg(res.data)
//         form.elements.query.value = ""
//         // console.log();
//         // const img = document.createElement('img')
//         // img.src = res.data[0].show.image.medium
//         // document.body.append(img)
//     } catch (e) {
//         console.log("err", e);
//     }

// })

// const disImg = (shows) => {
//     for (let results of shows) {
//         if (results.show.image) {
//             const img = document.createElement('img')
//             img.src = results.show.image.medium
//             document.body.append(img)

//         }
//     }
// }






// class pet {
//     constructor(name, age) {
//         console.log('pet cons');
//         this.name = name
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`
//     }
// }



// class cat extends pet {
//     constructor(name, age, left = 9) {
//         console.log('cat con');
//         super(name, age)
//         this.left = left
//     }
//     meoww() {
//         return "meoww"
//     }
// }

// class dog extends pet {
//     bark() {
//         return 'barkihh'
//     }
// }




// const cats = require('./backend/export node modules example')
// console.log(cats);



