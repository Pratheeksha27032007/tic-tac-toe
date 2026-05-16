let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector(".winner-msg");
let playO=true;
let win=false;
let ind=1
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(playO){
            box.innerText="O"
            box.style.color="green"
            playO=false
        }
        else{
            box.innerText="X"
            box.style.color="red"
            playO=true
        }
    box.disabled=true;
    winner();
    if(ind===9 && !win){
        msg.style.visibility="visible"
        msg.innerText="Its a Draw"
        msg.style.color="blue"
        msg.style.borderColor="blue"
        reset.innerText="New game"
    }
    ind++;
    })
})
const winPatterns = [
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4,7],
[2, 5,8],
[2, 4, 6],
[3, 4,5],
[6,7,8]
];
let winner=()=>{
   for(let pattern of winPatterns){
    let p1=boxes[pattern[0]].innerText;
    let p2=boxes[pattern[1]].innerText;
    let p3=boxes[pattern[2]].innerText;
    if(p1!=="" && p1===p2 && p2===p3){
        msg.innerText=`${p1} won`
        msg.style.visibility="visible"
        reset.innerText="New Game"
        if(p1==="O"){msg.style.color="green"
            msg.style.borderColor="green"}
        else{
            msg.style.color="red"
            msg.style.borderColor="red"
        }
        win=true
        boxes.forEach((box)=>{
        box.disabled=true;
        
    })
    }
   }
}
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    })
    ind=1
    win=false
    reset.innerText="reset"
    msg.innerText=""
    msg.style.visibility="hidden"
})
