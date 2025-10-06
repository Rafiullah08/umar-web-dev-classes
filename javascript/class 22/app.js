// setTimeout(function(){
//     console.log("hello after 2 seconds")
// }, 2000)

// let btn = document.querySelector("button")

//   let settime =setInterval(function(){
//     console.log("hello after 2 seconds");
  
// },2000)

// function stopInterval(){
//  clearInterval(settime)
// }

// stopwatch, watch


// global variables
// local variables

// let count = 0;
 
// function stopInterval(){
// let b = 0;

// }


let milli = document.getElementById("milli")
let sec = document.getElementById("sec")
let min = document.getElementById("min")
let hr = document.getElementById("hr")

let milliSec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = false;


function startTimer(){
timer = true;   

if(timer == true){
    milliSec = milliSec + 1;}

    console.log(milliSec);
    milli.innerHTML = milliSec;

    if(milliSec == 10){
        seconds = seconds + 1;
        sec.innerHTML = seconds;
        milliSec = 0;
    }
setTimeout(startTimer,100);

}