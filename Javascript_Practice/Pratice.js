

function myPromises(time){
    return new Promise((res,rej) => {
        const randomNum = Math.floor(Math.random()*100);
        setTimeout(() => {
            if(randomNum>50){
                res("Success");
            }
            else{
                rej("Failure");
            }
        }, time);
    });
}

Promise.all([myPromises(1000), myPromises(2000), Promise.resolve()]).then(val => console.log(val)).catch(err => console.log(err)); 


// function(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }

// const val = a(1)(2)(3);

// const debounce = (cb, delay) =>{
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(() => {
//             cb(...args);
//         }, delay);
//     }
// }


// function add(a){
//     return function(b){
//         if(b !== undefined){
//             return add(a+b);
//         }
//         else{
//             return a;
//         }
//     }
// }

// Build a color picket that allows users to select a color