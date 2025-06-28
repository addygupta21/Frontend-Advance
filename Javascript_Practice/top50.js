

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

function reverseOdd(string){
    function reverseWord(word){
        return word.split("").reverse().join("");  
    }
    const wordsArr = string.split(" ");
        // wordsArr.forEach(x => {
        //      if (x.length %2 ==1) reverseWord(x);
        // }

        // here, it is not useful to use 'forEach', because forEach won't change any elements of the array.
        // In order to change the elements of the array, i need to use the map for this thing ( with a function that has condition and it will change each elements of the array, based on that condtion).

        const newArray = wordsArr.map(x =>{
            if(x.length %2 === 1) return reverseWord(x);
            else return x;
        }
        );
    return newArray.join(" ");
}

    const string2 = reverseOdd("Hi I ame Addy");
    console.log(string2);





