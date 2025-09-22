// alert("Hello, World!");

// let head = document.getElementById("head").innerHTML = "Hello, javascript!";

// console.log(head);


// let btn = document.getElementsByTagName("button")[0].innerText = "Click Me";
// console.log(btn);

// let head = document.getElementById("head").style.color = "green";
// console.log(head);

// // camelCase
// let para = document.getElementsByTagName("p")[0].style.fontSize = "20px";
// console.log(para);

let container = document.getElementById("container");


let head = document.createElement("h1");
let text = document.createTextNode("Hello, World!");

let headd = head.appendChild(text);
console.log(headd);


let para = document.createElement("p");
let paraText = document.createTextNode("hello javascript");

let paraa =para.appendChild(paraText);
console.log(paraa);


let btn = document.createElement("button");
let btnText = document.createTextNode("Submit");

let btnn = btn.appendChild(btnText);    
console.log(btnn);

container.appendChild(headd);
container.appendChild(paraa);
container.appendChild(btnn);
