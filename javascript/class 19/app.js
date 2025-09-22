// alert("hello")

// DOM = Document Object Model

// window . ye global object hai

// window
// document
// html
// head
// body
// div
// h1
// p


//node => node hamre object ko represent krta hai
    // dom manipulation
// document.getElementById() 
// document.getElementsByClassName()
// document.getElementsByTagName()
// document.querySelector() => single element ko select krta hai
// document.querySelectorAll() => multiple elements ko select krta hai

// let para = document.getElementById("para");
// console.log(para);

// let para2 = document.getElementsByClassName("name");
// console.log(para2);

// let heading = document.getElementsByTagName("h2");
// console.log(heading); //undefined

// let head2 = document.querySelector(".head2")
// console.log(head2);

// let head3 = document.querySelectorAll(".head3")
// console.log(head3);

// let headings = document.querySelectorAll("h2")
// console.log(headings);


// let btn = document.querySelectorAll("button")
// console.log(btn);

{/* <div>
 text
<h1>hello</h1>
text
<h2>hello</h2>
text
<p>hello</p>
text
</div> */}

let para = document.childNodes[1].children[0].children[2].innerText
console.log(para);



