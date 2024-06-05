const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissors=document.querySelector("#scissors");
function comp_choice()
{
    
}
function user_choice(choice)
{
    com_choice()
}
rock.addEventListener("click",()=>
{
    rock.style.backgroundColor="Green";
    var choice="rock";
    user_choice(choice);
});
paper.addEventListener("click",()=>
{
    paper.style.backgroundColor="Green";
});
scissors.addEventListener("click",()=>
{
    scissors.style.backgroundColor="Green";
});
