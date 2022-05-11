
const occasion = document.getElementById('occasion');
const day = document.getElementById("Days");
const hour = document.getElementById("Hours");
const minute = document.getElementById("Mins");
const second= document.getElementById('Seconds');
let newYears = '1 Jan 2023';

let occasion1 = prompt("Please enter the occasion ?", "New Years Eva",);
let text;
if (occasion1 == null || occasion1 == "") {
      text = "Please Enter the occasion";
} else {
  occasion.innerHTML= occasion1;
}

let date = prompt("Enter the Date your what the contdown ?", "1 Jan 2022");
let date1;
if( date == null || date == ""){
    date1;
}
else{
  newYears =parseInt(date);
}
let Days = null;
let hours = null;
let minutes = null;
let seconds = null;

        
    // Countdown functions & Calculation
function Countdown() {
    const newYearsDate = new Date(date);
    const currentDate = new Date();

    const totalseconds = (newYearsDate - currentDate) / 1000;

    Days = Math.floor(totalseconds/3600/24);
    
    hours= Math.floor(totalseconds/3600)%24;
    
    minutes = Math.floor(totalseconds/60)%60;
    
    seconds = Math.floor(totalseconds)%60;

    day.innerHTML = formatTime(Days);
    hour.innerHTML = formatTime(hours);
    minute.innerHTML = formatTime(minutes);
    second.innerHTML = formatTime(seconds);
    
}
// function for show proper time format
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
Countdown();


// initial call
setInterval(Countdown, 1000);
