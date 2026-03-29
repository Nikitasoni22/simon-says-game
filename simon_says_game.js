let gameseq=[];
let userseq=[];
let btns = ["pink","yellow","green","blue"];
let started = false;
let level = 0 ;
let h2=  document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);

}
 function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randind = Math.floor(Math.random()*4);
    let randcolor = btns[randind];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn); 
 }
function checkans(index){
   // console.log("current level:",level);
   
   if(userseq[index] === gameseq[index]){
    if(userseq.length == gameseq.length){
        setTimeout(levelup,1000);
    }
    console.log("same value");
   }else{
    h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor ="white"; } , 150
    );
    reset();
   }
}
function btnpress(){
    let btn = this;
    btnflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq=[];
    userseq= [];
    level =0;
}