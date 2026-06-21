// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
  
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBgd5mR6ohALrkpXrYMVcokgyJivKnAGYs",
    authDomain: "new-project-73e6b.firebaseapp.com",
    projectId: "new-project-73e6b",
    storageBucket: "new-project-73e6b.firebasestorage.app",
    messagingSenderId: "571398860074",
    appId: "1:571398860074:web:3c779fbeea380482660253",
    measurementId: "G-P4NKGJDJ6W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const btn = document.getElementById("btn")
console.log(btn)


function login(){
    
const email = document.getElementById("email").value
const password = document.getElementById("password").value

console.log(email, password);



createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log("signup suceessfully")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(error.message)
    // ..
  });

}



btn.addEventListener("click", ()=>{
    login()
})















//   steps
  // create firebase account
  // create firebase project
  // registerd app 
  // config firebase in our file 