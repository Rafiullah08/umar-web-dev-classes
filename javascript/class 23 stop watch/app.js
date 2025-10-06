let millSec = document.getElementById("millSec");
let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hr = document.getElementById("hours");


let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;



var timer = false;

function startTimer() {
    timer = true;
    console.log(timer);

    if (timer ) {
        milliseconds = milliseconds + 1
        millSec.innerHTML = milliseconds;
  
        if (milliseconds == 1000) {        
         seconds = seconds + 1;

         sec.innerHTML = seconds;
         milliseconds = 0

         if (seconds == 60) {
            minutes = minutes + 1
            min.innerHTML = minutes;
            seconds = 0

    if(minutes == 60) {
        hours = hours + 1
        hr.innerHTML = hours;
        minutes = 0
     }


         }
   

       }
    }


if(milliseconds < 10){
    millSec.innerHTML = "0" + milliseconds;
    if(seconds < 10){
        sec.innerHTML = "0" + seconds;
    }
    if(minutes < 10){  
    min.innerHTML = "0" + minutes;
}
    if(hours < 10){
    hr.innerHTML = "0" + hours;
}

}
    
start()

}


let interval;
function start(){
    interval = setTimeout(startTimer,10)
}


// stop function
function stop(){
timer = false;
clearTimeout(interval)
console.log("stopped");

}


// reset function
function reset(){
    location.reload();
}




