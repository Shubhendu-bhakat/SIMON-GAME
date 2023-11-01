let gameSeq = [];
let userSeq = [];
let score = [];
let btns = ["yellow","red","purple","green"];


let started = false;
let level = 0;


let h2 = document.querySelector("h2");
document.addEventListener("keypress",()=>{
   if(started == false)
   {
    // console.log("game started");
    started =true;
    leveUp();
   }
});

 function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },200);
 }




 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
     btn.classList.remove("userFlash");
    },200);
  }





function leveUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
      
    let randomIndx = Math.floor(Math.random()*3);
    let randomCol = btns[randomIndx];
    let randomBtn = document.querySelector(`.${randomCol}`);
    gameSeq.push(randomCol);
   
   console.log(gameSeq);
    btnFlash(randomBtn);
}

function checkAns(index){
//   console.log(`level is ${level}`);
//    index = level - 1;
  if(userSeq[index]==gameSeq[index])
  {
    if(userSeq.length == gameSeq.length){
        setTimeout(leveUp,1000);
    }

  }
  
  else
  {
    h2.innerHTML = `Game over ! Score is <b>${level} </b>Thanku! <br>Press any key to start again`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor = "white";
    },400);
    start();   
 
  }

}


function btnPress(){
   let btn = this;
   userFlash(btn);
   let userColor = btn.getAttribute("id");
//    console.log(userColor);
   userSeq.push(userColor);
   console.log(userSeq);
   checkAns(userSeq.length-1);
};
let btnAll = document.querySelectorAll(".btn");
for(btn of btnAll){
    btn.addEventListener("click",btnPress);
    
}
function start(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}
//homework problem is to add highest marks