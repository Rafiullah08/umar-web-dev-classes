// aler("hello")

let todoPara = document.getElementById("todopara");
let todoList = document.getElementById("todoList");
let btnDeleteAll = document.getElementById("btnDeleteAll");
// console.log(btnDeleteAll);



function addTodo() {
   let todoValue   = todoPara.value;
//    console.log(todoValue);

  let todoData  = `<div class="todo mt-3">
  
     <span class="todoText">${todoValue}</span>
        <button class="btn btn-danger" >Delete</button>
        <button class="btn btn-danger">Edit</button>

    </div>`

todoList.innerHTML += todoData
todoPara.value = "";
    
}

 // Delete All  Function
function deleteAll() {
todoList.innerHTML = "";
    
}









// Event Listener
btnDeleteAll.addEventListener("click", function(){
    deleteAll();

})