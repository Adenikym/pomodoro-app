const five = document.getElementById("five");
let half = document.getElementById("half");
const set = document.getElementById("set");
const display= document.getElementById("seconds");
const middle = document.getElementById("mains");
const first = document.getElementById("hours");


let count = document.getElementById("count");
const start = document.getElementById("start");

function timer (seconds) {
    const now= Date.now();
    const then= now + (seconds*1000)
console.log([now,then])

   
const countdown=setInterval(function () {
    const secondsLeft=  then-Date.now();
    showTime(Math.round(secondsLeft/1000));
    console.log(Math.round(secondsLeft/1000));
    if (secondsLeft<0 ){

        clearInterval(countdown);
        return;
    }
   
    

    
   
    



   
    
}
 ,-1)

    


    
}

function showTime(seconds){
    
    const lowest= Math.floor(seconds/60);
    const minutes=Math.floor( seconds%60);
    const hours= seconds/3600;
    display.innerHTML=minutes;
    middle.innerHTML=lowest;
    
}

start.addEventListener("click",function() { 
    count.innerHTML++;
    
    return timer(1500);
    
}
    
)

let watchCounter= setInterval ( function useCounter() {
    

    let count = document.getElementById("count");
    
    let half = document.getElementById("half");
if (count.innerHTML<4){
    half.classList.remove("active");
    half.classList.add("inactive");
}

else if (count.innerHTML>=4) {
   
    half.classList.remove("inactive");
   half.classList.add("active");
}
},1000)

useCounter();













five.addEventListener("click",function () {
    return timer(300);

})

half.addEventListener("click",function () {
    return timer(1200);

})




