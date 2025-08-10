let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const gencompchoice=()=>{
 const options =["rock","paper","scissors"];
 const ranidx=Math.floor(Math.random()*3);
 return options[ranidx];

};
const drawGame=()=>{
    console.log(" game is draw.play again.")
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if (userwin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
      } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
      }
};
const playGame=(userchoice)=>{
    const compchoice= gencompchoice();
    console.log("compchoice:",compchoice);
    if(compchoice===userchoice){
        drawGame();

    }
    let userwin=true;
    if(userchoice=="rock"){
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice=="paper"){
        userwin=compscore=="scissors"?false:true;
    }
    else{
        userwin=compchoice=="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log( "userchoice:",userchoice);
        playGame(userchoice);
    });
});