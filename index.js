document.querySelector(".wrapper").classList.add("wrapperBG");
boxes=document.querySelectorAll(".box");
var active="X";
var array=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
var flag=0;
for(let i=0;i<9 ;i++){
    boxes[i].addEventListener('click',()=>{
        addSymbol(boxes[i],i);
    });
}
function addSymbol(clickedBox,index){
    if(flag==0){
        if(active=='X'){
            clickedBox.innerHTML="O"
            array[index]+=2;
            active='O';
            document.querySelector(".heading").innerHTML="TURN OF -> X";
            checkWin();
            
        }
        else{
            clickedBox.innerHTML="X";
            array[index]+=1;
            active="X";
            document.querySelector(".heading").innerHTML="TURN OF -> O";
            checkWin();
            
        }
    }
}
function checkWin(){
    if((array[0]==0 && array[1]==0 && array[2]==0) || (array[0]==1 && array[1]==1 && array[2]==1)){
        boxes[0].classList.add("red");
        boxes[1].classList.add("red");
        boxes[2].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
    if((array[3]==0 && array[4]==0 && array[5]==0) || (array[3]==1 && array[4]==1 && array[5]==1)){
        boxes[3].classList.add("red");
        boxes[4].classList.add("red");
        boxes[5].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
    if((array[6]==0 && array[7]==0 && array[8]==0) || (array[6]==1 && array[7]==1 && array[8]==1)){
        boxes[6].classList.add("red");
        boxes[7].classList.add("red");
        boxes[8].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
    if((array[0]==0 && array[3]==0 && array[6]==0)|| (array[0]==1 && array[3]==1 && array[6]==1)){
        boxes[0].classList.add("red");
        boxes[3].classList.add("red");
        boxes[6].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
    if((array[1]==0 && array[4]==0 && array[7]==0) || (array[1]==1 && array[4]==1 && array[7]==1)){
        boxes[1].classList.add("red");
        boxes[4].classList.add("red");
        boxes[7].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
    if((array[2]==0 && array[5]==0 && array[8]==0) || (array[2]==1 && array[5]==1 && array[8]==1)){
        boxes[2].classList.add("red");
        boxes[5].classList.add("red");
        boxes[8].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
    if((array[0]==0 && array[4]==0 && array[8]==0)|| (array[0]==1 && array[4]==1 && array[8]==1)){
        boxes[0].classList.add("red");
        boxes[4].classList.add("red");
        boxes[8].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
    if((array[2]==0 && array[4]==0 && array[6]==0) || (array[2]==1 && array[4]==1 && array[6]==1)){
        boxes[2].classList.add("red");
        boxes[4].classList.add("red");
        boxes[6].classList.add("red");
        document.querySelector(".heading").innerHTML=active+" WINS";
        flag=1;
    }
}
document.querySelector(".btn").addEventListener('click',()=>{
    for(let i=0;i<9;i++){
        boxes[i].innerHTML="";
        array[i]=-1;
        flag=0;
        if(boxes[i].classList.contains("red")){
            boxes[i].classList.remove("red");    
        }
        active="O"
        document.querySelector(".heading").innerHTML="TURN OF -> X";
    }
})

