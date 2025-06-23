// alert("hello")

let date = new Date()
console.log(date);


let today = date.getDay()
console.log(today);

let fullDate = date.getFullYear()
console.log(fullDate);

// 0 = jan
// 11 = dec

// hours
// min
// sec
// millisecond

// 1000 millisecond = 1 sec

// let time = date.getTime("10,09,2002")

// console.log(time);

// let age = 

let todayy = new Date()
let doomsday =new Date("june 23,2035")


let today1 = todayy.getTime() /// 1970 to 06,23,2025
let doomsdayy = doomsday.getTime()  // 1970 to 06,23,2035



let diff = doomsdayy - today1

let days = diff / (1000 * 60 *60 * 24)

console.log(today1);
console.log(doomsdayy);

console.log(diff);
console.log(days);




let today = new Date()

let dob = new Date("sep 10 , 2002")

console.log(today);
console.log(dob);

let milliSec1 = today.getTime()
let milliSec2 = dob.getTime()


let diff = milliSec1 - milliSec2

let myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

console.log(diff);
console.log(myAge);



let now = new Date()

let newyaer = now.setFullYear("2050")
console.log(now);
console.log(newyaer);



