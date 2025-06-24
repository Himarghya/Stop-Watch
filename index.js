const start = document.getElementById("start");
const Reset = document.getElementById("Reset");
const Stop = document.getElementById("stop");
const Timer = document.getElementById("Timer");
const Input = document.getElementById("Input");
const Submit = document.getElementById("submit");
Submit.addEventListener("click",() =>{
   TimeLeft = TimeSelection() * 60;
})
let interval;
function TimeSelection(){
   var valueOfTime = Input.value;
   if(valueOfTime > 59){
      alert("please Enter the correct value for Time");
   }
   else{
      alert("plz press start to continue your Timer");
      return valueOfTime;
   }
}

function updatedTimer()
{
   var Minute = Math.floor(TimeLeft/60);
   var Second = TimeLeft % 60;
   Timer.innerHTML = `${Minute.toString().padStart("2" , 0)}:${Second.toString().padStart("2" , 0)}`;
}
start.addEventListener("click" , () =>{
    Interval();
    Sound();
})

Reset.addEventListener("click" , () =>{
   clearInterval(interval);
    TimeLeft = TimeSelection() * 60;
    updatedTimer();
    Sound();
})
Stop.addEventListener("click" , () =>{
   clearInterval(interval);
   Sound();
});

function Interval()
{
   interval =  setInterval(() =>{
    updatedTimer();
    TimeLeft--;
    if(TimeLeft === 0)
       {
       alert("Time's Up");
       clearInterval(interval);
       TimeLeft = TimeSelection() * 60;
       }
       }, 1000)

}
function Sound(){
    var audio = new Audio("./click-234708 (1).mp3");
    audio.play();
}
