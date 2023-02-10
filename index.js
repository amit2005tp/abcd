
var timerObj =document.getElementById("timer")
var startBtnObj = document.getElementById("start-btn")
var resetBtnObj = document.getElementById("reset-btn")
var isTimerRunning = false
let a=0;
//reset button
resetBtnObj.addEventListener("click",()=>{
    console.log("reset button clicked");
    timerObj.textContent = "00:00";

    /*a+=1;
    console.log(a); */

})

//start button
startBtnObj.addEventListener("click",()=>{
    if(isTimerRunning){
        console.log("stopped timer");
        startBtnObj.textContent = "Start"
        isTimerRunning = false
    }else{
        console.log("started timer");
        startBtnObj.textContent = "Stop"
        isTimerRunning = true
        interval = setInterval(function(){
            console.log("hi"),1000
        })
        clearInterval(interval);
    }

})