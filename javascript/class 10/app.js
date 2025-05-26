// alert("hello")

// let cities = ["karachi", "lahore", "peshawer"]

// cities[1] = "queeta"
// console.log(cities);

// console.log(cities[1]);


// array methods

// console.log("original array", cities);

// cities.push("chitral")
// cities.pop()


// cities.unshift("chitral")
// cities.shift()

// console.log("new array", cities);


// push() => add value in the end of array
// pop() => remove value from the end of array
// unshift() => add value in the start of array
// shift => remove value from the start of array

 

let cities = ["karachi", "lahore", "peshawer"]


// let copy = cities.slice(1,3)

// console.log(cities);
// console.log(copy);



cities.splice(2,0,"chitral", "queeta")
console.log(cities);

// console.log(newArr);


// slice() => starting point / index number, endpoint / length
// splice()=> starting point, delete count, what add
