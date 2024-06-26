let displayy=document.getElementById('stopwatch');
let startstopbutton=document.getElementById('startStop');
let resetbutton=document.getElementById('reset');

let secs=0;
let interval;
let running=false;

function formattime(seconds){
    let hrs=Math.floor(seconds/3600);
    let mins=Math.floor((seconds%3600)/60);
    let s=seconds%60;

    let fhrs=(hrs<10?'0':'')+hrs;
    let fmins=(mins<10?'0':'')+mins;
    let fsec=(s<10?'0':'')+s;
return fhrs + ':'+ fmins + ':' + fsec ;
}

function updatetime(){
    displayy.innerText=formattime(secs);
}

function startwatchh(){
    interval=setInterval(()=>{
secs++;
updatetime();
    },1000);
}

function stopwatchh(){
    clearInterval(interval);
}

startstopbutton.addEventListener('click',()=>{
if(running){
   stopwatchh();
    startstopbutton.innerHTML='Start';
}
else{
    startwatchh();
    startstopbutton.innerHTML='Stop';
}
running=!running;
});

resetbutton.addEventListener('click',()=>{
    stopwatchh();
startstopbutton.innerText='Start';
secs=0;
updatetime();
running=false;
});
