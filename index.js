let userscore=0;
let compscore=0;
let content=document.querySelector("#decision");
let choices=document.querySelectorAll(".image");
let user=document.querySelector(".user");
let comp=document.querySelector(".computer");
let user1=document.querySelector("#user1");
let comp1=document.querySelector("#comp1");
let resetbtn=document.querySelector("#button");
let pointer=document.querySelector(".pointer")


 choices.forEach((choice) => {
    choice.addEventListener("click",()=>
    
    {
        const user=choice.getAttribute("id");
        play(user);
    })

});
const compgen=()=>{
    const option=["stone","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return option[random];

}
const play =(userchoice)=>
{
    console.log("user choice =",userchoice);
    //genrated choice of computer
    const compchoice=compgen();
    console.log("computer choice =",compchoice);
    if(userchoice==compchoice){
        draw(userchoice,compchoice);//draw conditon

    }
    else{
        let userwin=true;
        if(userchoice==="stone")
        {
            userwin=(compchoice =="paper")?false:true;
        }
        else if(userchoice=="paper"){
            userwin=(compchoice =="scissor")?false:true;
        }
        else if(userchoice==="scissor"){
            userwin=(compchoice=="stone")?false:true;
        }

        showwinner(userwin,userchoice,compchoice);
    }

}
const draw=(userchoice,compchoice)=>{
    content.innerText="Draw!!";
    user1.innerText=userchoice;
    comp1.innerText=compchoice;
    content.style.color="white";



}

const showwinner=(userwin,userchoice,compchoice)=>
{
    if(userwin){
        userscore++;
        user1.innerText=userchoice;
        comp1.innerText=compchoice;
        user.innerText=userscore;
        content.innerText="You Won!";
        content.style.color="green";
    }
    else{
        compscore++;
        user1.innerText=userchoice;
        comp1.innerText=compchoice;
        comp.innerText=compscore;
        content.innerText="You Lose";
        content.style.color="red";
        
    }
    if(compscore==5 || userscore==5)
    {
        if(compscore==5){
        content.innerText="THE END ";
        pointer.innerText="Computer Won The Match "
        pointer.style.color="red";
            disable();
        }
        
        if(userscore==5){
            content.innerText="THE END";
            pointer.innerText="You Won The Match!!";
            pointer.style.color="green";

            disable();
    
            }
    }
}
function disable()
{
choices.forEach((choice) => {
    choice.removeEventListener("click",()=>
    
    {
        const user=choice.getAttribute("id");
        play(user)
    
    })

});
}

const reset=()=>{
    compscore=0;
    userscore=0;
    content.innerText="Your Turn";
    comp1.innerText='';
    user1.innerText='';
    comp.innerText='0';
    user.innerText='0';
    pointer.innerText="Five Match pointer";
    pointer.style.color="black";
    
}
resetbtn.addEventListener("click",reset);