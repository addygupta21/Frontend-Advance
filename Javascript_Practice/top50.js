

// Question 10  Text Exchange

// const element = document.getElementById("p");
// element.textContent = "lessgo";
// console.log(element); // lessgo.

// Question 11 : Create a button dynamically and add it to the webpage

// let container = document.getElementById("container");
// let button = document.createElement("button"); // here i should only insert tags like 'p', 'h1', 'div', 'span'.
// button.textContent = "Click Me !!";
// container.appendChild(button);

// // Inside this dive, the button will be shown on the UI now.

// Question 12: Display Alert: Add a click event listener to a button that displays an alert when clicked.

// document.getElementsByTagName("button")[0].addEventListener("click", () => {
//     alert('button clicked');
// });
// // here, since elementsbytage name, means multiple divs are there and we are selecting only.
// // OR

// let button = document.querySelector("button");
// button.addEventListener("click", () => {
//     alert('button display');
// })

// Question 13: Write a function that calculates the factorial of a given number

// function factorialCal(n){
//     if(n<=1) return 1;
//     return  n*factorialCal(n-1);
// }
// or run a forloop from i = 1 -> i= n to calculate the final result.
// const val = factorialCal(3);
// console.log(val);

// Question 14: Create a function that generates a random number between a given range

// function generateRanNum(min,max){
//         const num = Math.floor(Math.random() *(max-min+1) + min);
//         return num;
// }
// // Math.random() gives the value between 0 to 1.
// const value = generateRanNum(2,6);
// console.log(value);

// Question 15: (HOF) Write a function that takes an array of numbers and returns a new array with only the even numbers.

// function evenConvert(arr){
//     let newArray = [];
//     arr.forEach(x =>{
//         if(x%2 == 0){
//             newArray.push(x);
//         }
//     })
//     return newArray;
// }

// const sampleArr = [1,2,3,4,5,6];
// const newlyArr = sampleArr.filter(x => x%2 === 0);
// console.log(newlyArr);
// const newly = evenConvert([1,2,3,4,6,8,9]);
// console.log(newly);

// Question 16: Create an image gallery using dynamically generated elements
// function createImageElement(src){
//     const imgElement = document.createElement('img');
//     imgElement.src = src;
//     return imgElement;
// }
// let gallery = document.getElementById("gallery");
// let imageUrls = ["./image/1.jpg", "./image/2.jpg", "./image/3.jpg"];
// imageUrls.forEach(x => 
//     gallery.appendChild(createImageElement(x))
// );

// Question 17: Given a string, reverse all the words which have odd length. The eve length words are not changed.
// reverseOdd("Apple") => elppA
// reverseOdd("One Two Four") => rouF owT enO
// function reverseOdd(string){
//     function reverseWord(word){
//         return word.split("").reverse().join("");  
//     }
//     const wordsArr = string.split(" ");
//         // wordsArr.forEach(x => {
//         //      if (x.length %2 ==1) reverseWord(x);
//         // }
//         // here, it is not useful to use 'forEach', because forEach won't change any elements of the array.
//         // In order to change the elements of the array, i need to use the map for this thing ( with a function that has condition and it will change each elements of the array, based on that condtion).
//         const newArray = wordsArr.map(x =>{
//             if(x.length %2 === 1) return reverseWord(x);
//             else return x;
//         }
//         );
//     return newArray.join(" ");
// }
//     const string2 = reverseOdd("Hi I ame Addy");
//     console.log(string2);

// Question 18: Use map() to double all the elements
// const arr = [1,2,3];
// doubleArr = arr.map(x => x*2);
// console.log(doubleArr);

// function doubleArr(arr){
//     return arr.map(x => x*2);
// }
// const newArray = doubleArr([1,2,3,4,5]);
// console.log(newArray);

// Question 19: Find the largest element in an array using the reduce() method
// function findLargeElement(arr){
//     return arr.reduce((acc, ele)=>{
//         if(acc < ele) acc = ele;
//         return acc;
//     },0);
// }
// const maxVal = findLargeElement([1,3,4,10,10,6,8]);
// console.log(maxVal);

// Question 20: Remove all occurences of a specific element from an array
// function removeElementArray(arr, target){
//     return arr.filter(x => x!==target);
// }
// const newArray = removeElementArray([1,2,2,3,4,2,5], 2);
// console.log(newArray);

// Question 21: Create a function that displays the current date and time in a speciific format

// function getCurrentDateAndTime(){
//     let currentDate = new Date();
//     return currentDate.toLocaleString();
// }
// console.log(getCurrentDateAndTime());

// Question 22: Write a recursive function to calculate the factorial of a given number

// function calculateFactorial(n){
//     if(n<=1) return n;
//     return n*calculateFactorial(n-1);
// }

// const finalVal = calculateFactorial(5);
// console.log(finalVal);

// Question 23: Recursive function to call fibonacci of the number

// function calFibonacci(n){
//     if(n<=1) return n;
//     return calFibonacci(n-1) + calFibonacci(n-2);
// }
// const value1 = calFibonacci(8);
// console.log(value1);

// Question 24: Create a counter function using closures that increments and returns the count on each call.

// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();

// counter1();
// counter1();

// var counter2 = counter();

// counter2();
// counter1();
// counter2();


// function counterClass(){
//     let count = 0;
//     this.increment = ()=> { 
//         count++;
//         console.log(count);
//     }
//     this.decrement = () => {
//         count--;
//         console.log(count);
//     }
//     return count;
// }
// var counterX = new counterClass(); // to use function as a constructor, initialize like this.
// counterX.increment();
// counterX.increment();
// counterX.decrement();
// counterX.decrement();

// Question 25: Implement a private variable using closure.

// In this, i have to return an object, which should access the private variable, means via methods, i should be able to updatea nd access the value of the variable.

// function createCounter(){
//     let count = 0;

//     function increment(){
//         count++;
//         console.log(count);
//     }

//     return {
//         incrementCounter: function(){
//             increment();
//         },
//         getCount: function(){
//             return count;
//         }
//     }    
// }

// let counter1 = createCounter();

// counter1.incrementCounter();
// const value =counter1.getCount();
// console.log(value);
// counter1.incrementCounter();

// console.log(counter1.getCount());

// Question 26: Create a prototype for a Product object with properties like name, price, and quantity. Add a method to the Product prototype to calculate the total value.

// const Product = {};

// Product.prototype.name = "Aaditya";
// Product.prototype.price = 100;
// Product.prototype.quantity = 999;

// Product.prototype.total_Val = function(){
//     return this.price * this.qunatity;
// }

// Product.prototype.details = {
//     name: "Addy",
//     price: 101,
//     quantity: 19,
//     total_val: function(){
//         return this.price * this.quantity;
//     }
// }

// Step 1 creating constructor functions

// function Product(name, age, price){
//     this.name = name;
//     this.age = age;
//     this.price = price;
// }

// Product.prototype.calculateTotalValue = function(){
//     return this.price*this.age;
// }
// const product1 = new Product("Aaditya", 21, 100);
// console.log(product1.calculateTotalValue());
// console.log(`${product1.name} and and ${product1.age}`);


// Question 27: Implement a try-catch block to handle an error that occurs during API data fetching

// function fetchData(){
//     try{
//         fetch('https://dummyjson.com/test').then(res => res.json()).then(x => console.log(x));
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// fetchData();

// using async await.

// async function fetchData(){
//     try{
//         const data = await fetch('https://dummyjson.com/test');
//         const responseData = await data.json();
//         console.log(responseData);
//         return responseData;
//     }
//     catch(err){
//         console.log("Error is happening here:", err);
//     }
// }
// fetchData().then(val => console.log(val));

// Question 28: Implement a function that makes multiple API calls and processes the data using callbacks

// function makeAPICall(url, callback){

//     fetch(url).then(data => {
//         if (!data.ok) throw new Error(`HTTP error! status: ${data.status}`);
//         return data.json()
//     }
//     ).then(resp => callback(resp))
//     .catch(err => console.log('Error: err', err));
// }

// function handleData(data){
//     console.log(data);
// }

// function main(){

//     const apiUrl1 = 'https://dummyjson.com/producs/?limit=10&skip=5&select=key1,key2,key3';
//     const apiUrl2 = 'https://dummyjson.com/test';

//     makeAPICall(apiUrl1, handleData);
//     makeAPICall(apiUrl2, handleData);
// }

// main();

/* Note: try catch is not used in the fetch.then(), it is used in async await onl, for errro cacthing, we use .cacth() in the fetch.then() kinda stuff*/

// Question 29: Implement the previous solution using Promised only.

// function makeAPICall(url){
//     return fetch(url).then(data => data.json());
// }

// function handleData(data){
//     console.log(data);
// }

// function main(){
//     const apiUrl1 = 'https://dummyjson.com/products/?limit=10&skip=5&select=key1,key2,key3';
//     const apiUrl2 = 'https://dummyjson.com/test';
//     makeAPICall(apiUrl1).then(data => handleData(data)).catch(err => console.log('Error occured:',err));
//     makeAPICall(apiUrl2).then(data => handleData(data)).catch(err => console.log(err));
// }
// /* whichever promise resolve first, it will be get printed, here in the above case, apiUrl2 promise is resolving first, so it will get the printed first only */
// main();

// Question 30: Use Promises to load multiple images asynchornously and display them as a webpage.














