let timerValue=document.getElementById("timer_container").innerText;
let timerContainer=document.getElementById("timer_container");
let isTimerRunning=false;
let startButton=document.getElementById("start_button");
let stopButton=document.getElementById("stop_button");
let resetButton=document.getElementById("reset_button");
let setTimerID;

function startTimer(){
    if(!isTimerRunning){
        isTimerRunning=true;
        countDownTimer();
    }
}
function countDownTimer(){
    if(timerValue>0){
    timerContainer.innerText=--timerValue;
    setTimerID=setTimeout(countDownTimer,1000);
    }
}
function stopTimer(){
    isTimerRunning=false;
    clearTimeout(setTimerID);
}
function resetTimer(){
    stopTimer();
    timerValue=60;
    timerContainer.innerText=60;
}
startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
resetButton.addEventListener("click",resetTimer);