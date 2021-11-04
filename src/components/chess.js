
import React, { useState } from 'react';

export default function Chess() {
let selectedSoldier=" "
let selectedI=" "
let selectedJ=" "
let player="1"

    const whiteArmy=["♔","♕","♖","♗","♘","♙"]
    const blackArmy=["♚","♛","♜","♝","♞","♟︎"]

    const [board] = React.useState([
        ['00','01','02','03','04','05','06','07'],
        ['10','11','12','13','14','15','16','17'],
        ['20','21','22','23','24','25','26','27'],
        ['30','31','32','33','34','35','36','37'],
        ['40','41','42','43','44','45','46','47'],
        ['50','51','52','53','54','55','56','57'],
        ['60','61','62','63','64','65','66','67'],
        ['70','71','72','73','74','75','76','77']
    ])
   function checkBPawnPath(i,j){
        let pathJ=j+1
        console.log(pathJ);
        let pathCoordinates = i.toString()+pathJ.toString();
        let pathElement= document.getElementById(pathCoordinates)
        if(pathElement.textContent==="")
            {return 0}
        return 1
   }

   function checkWPawnPath(i,j){
    let pathJ=j-1
    let pathCoordinates = i.toString()+pathJ.toString();
    let pathElement= document.getElementById(pathCoordinates)
    if(pathElement.textContent==="")
        return 0
    return 1
}

  
    const clickhandler=(i,j) =>{
        let CurrentCoordinates = i.toString()+j.toString();
        let CurrentElement=document.getElementById(CurrentCoordinates);
        let PreviousCoordinates = selectedI.toString()+selectedJ.toString();
        let PreviousElement = document.getElementById(PreviousCoordinates);
        
        if(selectedSoldier===" ")// for selecting a soldier to move
         {
          selectedSoldier=CurrentElement.textContent
          console.log(selectedSoldier);
          selectedI=i;
          console.log(selectedI)
          selectedJ=j;
          console.log(selectedJ)

        }
        else{// soldier already selected , we trying to move it 
            console.log("we are at ",PreviousElement.textContent)
            if(PreviousElement.textContent==="♟")// start to handle black pawn
            {
                console.log("we must be at ♟ and we are at ",PreviousElement.textContent)
                let canAttackFirst=0
                let CAFJ=selectedJ+1
                let CAFI=selectedI+1
                let CAFC=CAFI.toString()+CAFJ.toString();
                let CAFE=document.getElementById(CAFC)
                let CAFEC=CAFE.textContent
                for(let tmp=0;tmp<whiteArmy.length;tmp++)
                {
                    if(CAFEC=== whiteArmy[tmp])
                        canAttackFirst=1;
                }
               
                console.log("can attack first = "+ canAttackFirst);
                if(canAttackFirst && (i===selectedI+1 || i===selectedI-1)  && selectedJ+1===j){
                    console.log(CurrentElement.textContent);
                    PreviousElement.innerHTML=""
                    
                    console.log("attacking")
                    let newj=selectedJ + (j-selectedJ);
                    let newi=selectedI + (i-selectedI)
                    let newCoordinates = newi.toString()+newj.toString();
                    let newele=document.getElementById(newCoordinates);
                    if(j===7)
                        {
                            newele.innerHTML="♛"
                        }
                    else
                        {
                            newele.innerHTML="♟"
                        } 
                    newele.classList.add("newSoldier");
                        
                    selectedSoldier=" "
                    selectedI=" "
                    selectedJ=" "
                    canAttackFirst=0
                }
                
            if(selectedJ===1)//if we are on first move
            {
                console.log("we in first move")
                let isBlocked=0
                if(selectedJ+2===j)
                {
                   
                   isBlocked=checkBPawnPath(i,selectedJ)
                }
            console.log("is blocked ? "+isBlocked)
            if(i===selectedI && (selectedJ+1===j || selectedJ+2===j)&& CurrentElement.textContent==="" && !isBlocked)
            {
                console.log("i is :"+i+" and j is :"+j);
                console.log(CurrentElement.textContent);
            PreviousElement.innerHTML=""
            
            console.log(i)
            let newj=selectedJ + (j-selectedJ);
            let newCoordinates = i.toString()+newj.toString();
            let newele=document.getElementById(newCoordinates);
            newele.innerHTML="♟"
            newele.classList.add("newSoldier");
                
            selectedSoldier=" "
            selectedI=" "
            selectedJ=" "

            }
            }
        else{// not first move of the pawn
            if(i===selectedI && selectedJ+1===j && CurrentElement.textContent==="")
            {
                console.log("now Moving")
                console.log("i is :"+i+" and j is :"+j);
                console.log(CurrentElement.textContent);
            PreviousElement.innerHTML=""
            let newi=i;
            console.log(newi)
            let newj=selectedJ + (j-selectedJ);
            let newCoordinates = newi.toString()+newj.toString();
            let newele=document.getElementById(newCoordinates);
            if(j===7)
            {
                newele.innerHTML="♛"
            }
            else
            {
                  newele.innerHTML="♟"
            } 
        newele.classList.add("newSoldier");
                
            selectedSoldier=" "
            selectedI=" "
            selectedJ=" "
            }
            console.log("now Moving")
        }
    }//finish handling black pawn

    if(PreviousElement.textContent==="♙")// start to handle white pawn
            {
                console.log("we must be at ♙ and we are at ",PreviousElement.textContent)
                let canAttackFirst=0
                console.log(canAttackFirst);
                let CAFJ=selectedJ-1
                let CAFI=selectedI+1
                let CAFC=CAFI.toString()+CAFJ.toString();
                let CAFE=document.getElementById(CAFC)
                let CAFEC=CAFE.textContent
                for(let tmp=0;tmp<blackArmy.length;tmp++)
                {
                    if(CAFEC=== blackArmy[tmp])
                        canAttackFirst=1;
                }
               
                console.log("can attack first = "+ canAttackFirst);
                if(canAttackFirst && (i===selectedI+1 || i===selectedI-1)  && selectedJ+1===j){
                    console.log("this is : "+CurrentElement.textContent);
                    PreviousElement.innerHTML=""
                    
                    console.log(i)
                    let newj=selectedJ - (selectedJ-j);
                    let newi=selectedI - (i-selectedI);
                    let newCoordinates = newi.toString()+newj.toString();
                    let newele=document.getElementById(newCoordinates);
                    if(j===7)
                    {
                        newele.innerHTML="♕"
                    }
                else
                    {
                        newele.innerHTML="♙"
                    } 
                    newele.classList.add("newSoldier");
                        
                    selectedSoldier=" "
                    selectedI=" "
                    selectedJ=" "
        
                }
                
            if(selectedJ===6)//if we are on first move
            {
               
                let isBlocked=0
                if(selectedJ-2===j)
                {
                   
                   isBlocked=checkWPawnPath(i,selectedJ)
                }
            console.log("is blocked ? "+isBlocked)
            if(i===selectedI && (selectedJ-1===j || selectedJ-2===j)&& CurrentElement.textContent==="" && !isBlocked)
            {
                console.log("i is :"+i+" and j is :"+j);
                console.log(CurrentElement.textContent);
            PreviousElement.innerHTML=""
            
            console.log("")
            let newj=selectedJ - (selectedJ-j);
            let newCoordinates = i.toString()+newj.toString();
            let newele=document.getElementById(newCoordinates);
            if(j===7)
            {
                newele.innerHTML="♕"
            }
        else
            {
                newele.innerHTML="♙"
            } 
            newele.classList.add("newSoldier");
                
            selectedSoldier=" "
            selectedI=" "
            selectedJ=" "

            }
            }
        else{// not first move of the pawn
            if(i===selectedI && selectedJ-1===j && CurrentElement.textContent==="")
            {
                
                 
                console.log("i is :"+i+" and j is :"+j);
                console.log(CurrentElement.textContent);
            PreviousElement.innerHTML=""
            let newi=i;
            console.log(newi)
            let newj=selectedJ - (selectedJ-j);
            let newCoordinates = newi.toString()+newj.toString();
            let newele=document.getElementById(newCoordinates);
                newele.innerText="♙"
            newele.classList.add("newSoldier");
                 
            selectedSoldier=" "
            selectedI=" "
            selectedJ=" "
            }
        }
    }//finish handling white pawn


    console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♞")// start to handle black KNIGHT
    {
        // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<whiteArmy.length;tmp++)
        // {
        //     if(CAFEC=== whiteArmy[tmp])
        //         canAttackFirst=1;
        // }
    if(((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+2===j|| selectedJ-2===j)) ||((i===selectedI+2 || i===selectedI-2 ) &&( selectedJ+1===j|| selectedJ-1===j)))
       { console.log("now Moving")
        console.log("we at black knight")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♞"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}

console.log("where are we ? :",PreviousElement.textContent)
if(PreviousElement.textContent==="♘")// start to handle black KNIGHT
{
      // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<blackArmy.length;tmp++)
        // {
        //     if(CAFEC=== blackArmy[tmp])
        //         canAttackFirst=1;
        // }

if(((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+2===j|| selectedJ-2===j)) ||((i===selectedI+2 || i===selectedI-2 ) &&( selectedJ+1===j|| selectedJ-1===j)))
   { console.log("now Moving")
    console.log("we at black knight")
    console.log("i is :"+i+" and j is :"+j);
    console.log(CurrentElement.textContent);
PreviousElement.innerHTML=""
let newi=i;
console.log(newi)
let newj=selectedJ + (j-selectedJ);
let newCoordinates = newi.toString()+newj.toString();
let newele=document.getElementById(newCoordinates);
newele.innerHTML="♘"
newele.classList.add("newSoldier");
}
selectedSoldier=" "
selectedI=" "
selectedJ=" "

console.log("now Moving")
selectedSoldier=" "
selectedI=" "
selectedJ=" "
}


console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♜")// start to handle black Rook
    {
          // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<whiteArmy.length;tmp++)
        // {
        //     if(CAFEC=== whiteArmy[tmp])
        //         canAttackFirst=1;
        // }

    if(((i===selectedI+1 || i===selectedI-1 ) ||( selectedJ+1===j|| selectedJ-1===j)) ||
    ((i===selectedI+2 || i===selectedI-2 ) ||( selectedJ+2===j|| selectedJ-2===j)) || 
    ((i===selectedI+3 || i===selectedI-3 ) ||( selectedJ+3===j|| selectedJ-3===j)) ||
    ((i===selectedI+4 || i===selectedI-4 ) ||( selectedJ+4===j|| selectedJ-4===j)) ||  
    ((i===selectedI+5 || i===selectedI-5 ) ||( selectedJ+5===j|| selectedJ-5===j)) || 
    ((i===selectedI+6 || i===selectedI-6 ) ||( selectedJ+6===j|| selectedJ-6===j)) ||
    ((i===selectedI+7 || i===selectedI-7 ) ||( selectedJ+7===j|| selectedJ-7===j)) 
    )
       { console.log("now Moving")
        console.log("we at black Rook")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♜"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}

console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♖")// start to handle White Rook
    {
        // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<blackArmy.length;tmp++)
        // {
        //     if(CAFEC=== blackArmy[tmp])
        //         canAttackFirst=1;
        // }
        if(((i===selectedI+1 || i===selectedI-1 ) ||( selectedJ+1===j|| selectedJ-1===j)) ||
        ((i===selectedI+2 || i===selectedI-2 ) ||( selectedJ+2===j|| selectedJ-2===j)) || 
        ((i===selectedI+3 || i===selectedI-3 ) ||( selectedJ+3===j|| selectedJ-3===j)) ||
        ((i===selectedI+4 || i===selectedI-4 ) ||( selectedJ+4===j|| selectedJ-4===j)) ||  
        ((i===selectedI+5 || i===selectedI-5 ) ||( selectedJ+5===j|| selectedJ-5===j)) || 
        ((i===selectedI+6 || i===selectedI-6 ) ||( selectedJ+6===j|| selectedJ-6===j)) ||
        ((i===selectedI+7 || i===selectedI-7 ) ||( selectedJ+7===j|| selectedJ-7===j)))
    { console.log("now Moving")
        console.log("we at White Rook")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♖"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}

console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♝")// start to handle black BISHOPH
    {
                // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<whiteArmy.length;tmp++)
        // {
        //     if(CAFEC=== whiteArmy[tmp])
        //         canAttackFirst=1;
        // }

        if(((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+1===j|| selectedJ-1===j)) ||
        ((i===selectedI+2 || i===selectedI-2 ) &&( selectedJ+2===j|| selectedJ-2===j)) || 
        ((i===selectedI+3 || i===selectedI-3 ) &&( selectedJ+3===j|| selectedJ-3===j)) ||
        ((i===selectedI+4 || i===selectedI-4 ) &&( selectedJ+4===j|| selectedJ-4===j)) ||  
        ((i===selectedI+5 || i===selectedI-5 ) &&( selectedJ+5===j|| selectedJ-5===j)) || 
        ((i===selectedI+6 || i===selectedI-6 ) &&( selectedJ+6===j|| selectedJ-6===j)) ||
        ((i===selectedI+7 || i===selectedI-7 ) &&( selectedJ+7===j|| selectedJ-7===j)))
    { console.log("now Moving")
        console.log("we at black BISHOPH")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♝"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}


console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♗")// start to handle White BISHOPH
    {
        // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<blackArmy.length;tmp++)
        // {
        //     if(CAFEC=== blackArmy[tmp])
        //         canAttackFirst=1;
        // }
        if(((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+1===j|| selectedJ-1===j)) ||
        ((i===selectedI+2 || i===selectedI-2 ) &&( selectedJ+2===j|| selectedJ-2===j)) || 
        ((i===selectedI+3 || i===selectedI-3 ) &&( selectedJ+3===j|| selectedJ-3===j)) ||
        ((i===selectedI+4 || i===selectedI-4 ) &&( selectedJ+4===j|| selectedJ-4===j)) ||  
        ((i===selectedI+5 || i===selectedI-5 ) &&( selectedJ+5===j|| selectedJ-5===j)) || 
        ((i===selectedI+6 || i===selectedI-6 ) &&( selectedJ+6===j|| selectedJ-6===j)) ||
        ((i===selectedI+7 || i===selectedI-7 ) &&( selectedJ+7===j|| selectedJ-7===j)))
    { console.log("now Moving")
        console.log("we at White BISHOPH")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♗"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}

console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♚")// start to handle black KNIGHT
    {
                // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<whiteArmy.length;tmp++)
        // {
        //     if(CAFEC=== whiteArmy[tmp])
        //         canAttackFirst=1;
        // }

        if(((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+1===j || selectedJ-1===j)) || ((i===selectedI+1 || i===selectedI-1 ) || ( selectedJ+1===j || selectedJ-1===j)))
    { console.log("now Moving")
        console.log("we at black King")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♚"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}

console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♔")// start to handle white king
    {
        // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<blackArmy.length;tmp++)
        // {
        //     if(CAFEC=== blackArmy[tmp])
        //         canAttackFirst=1;
        // }
        if(((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+1===j || selectedJ-1===j)) || ((i===selectedI+1 || i===selectedI-1 ) || ( selectedJ+1===j || selectedJ-1===j)))
    { console.log("now Moving")
        console.log("we at white King")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♔"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}

console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♛")// start to handle black Queen
    {
        // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<whiteArmy.length;tmp++)
        // {
        //     if(CAFEC=== whiteArmy[tmp])
        //         canAttackFirst=1;
        // }
        if(((i===selectedI+1 || i===selectedI-1 ) ||( selectedJ+1===j|| selectedJ-1===j)) ||
        ((i===selectedI+2 || i===selectedI-2 ) ||( selectedJ+2===j|| selectedJ-2===j)) || 
        ((i===selectedI+3 || i===selectedI-3 ) ||( selectedJ+3===j|| selectedJ-3===j)) ||
        ((i===selectedI+4 || i===selectedI-4 ) ||( selectedJ+4===j|| selectedJ-4===j)) ||  
        ((i===selectedI+5 || i===selectedI-5 ) ||( selectedJ+5===j|| selectedJ-5===j)) || 
        ((i===selectedI+6 || i===selectedI-6 ) ||( selectedJ+6===j|| selectedJ-6===j)) ||
        ((i===selectedI+7 || i===selectedI-7 ) ||( selectedJ+7===j|| selectedJ-7===j)) ||
        ((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+1===j|| selectedJ-1===j)) ||
        ((i===selectedI+2 || i===selectedI-2 ) &&( selectedJ+2===j|| selectedJ-2===j)) || 
        ((i===selectedI+3 || i===selectedI-3 ) &&( selectedJ+3===j|| selectedJ-3===j)) ||
        ((i===selectedI+4 || i===selectedI-4 ) &&( selectedJ+4===j|| selectedJ-4===j)) ||  
        ((i===selectedI+5 || i===selectedI-5 ) &&( selectedJ+5===j|| selectedJ-5===j)) || 
        ((i===selectedI+6 || i===selectedI-6 ) &&( selectedJ+6===j|| selectedJ-6===j)) ||
        ((i===selectedI+7 || i===selectedI-7 ) &&( selectedJ+7===j|| selectedJ-7===j)))
    { console.log("now Moving")
        console.log("we at black Queen")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♛"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}

console.log("where are we ? :",PreviousElement.textContent)
    if(PreviousElement.textContent==="♕")// start to handle white Queen
    {
        // console.log(" we are at ",PreviousElement.textContent)
        // let canAttackFirst=0
        // console.log(canAttackFirst);
        // let CAFJ=selectedJ-1
        // let CAFI=selectedI+1
        // let CAFC=CAFI.toString()+CAFJ.toString();
        // let CAFE=document.getElementById(CAFC)
        // let CAFEC=CAFE.textContent
        // for(let tmp=0;tmp<blackArmy.length;tmp++)
        // {
        //     if(CAFEC=== blackArmy[tmp])
        //         canAttackFirst=1;
        // }
        if(((i===selectedI+1 || i===selectedI-1 ) ||( selectedJ+1===j|| selectedJ-1===j)) ||
        ((i===selectedI+2 || i===selectedI-2 ) ||( selectedJ+2===j|| selectedJ-2===j)) || 
        ((i===selectedI+3 || i===selectedI-3 ) ||( selectedJ+3===j|| selectedJ-3===j)) ||
        ((i===selectedI+4 || i===selectedI-4 ) ||( selectedJ+4===j|| selectedJ-4===j)) ||  
        ((i===selectedI+5 || i===selectedI-5 ) ||( selectedJ+5===j|| selectedJ-5===j)) || 
        ((i===selectedI+6 || i===selectedI-6 ) ||( selectedJ+6===j|| selectedJ-6===j)) ||
        ((i===selectedI+7 || i===selectedI-7 ) ||( selectedJ+7===j|| selectedJ-7===j)) ||
        ((i===selectedI+1 || i===selectedI-1 ) &&( selectedJ+1===j|| selectedJ-1===j)) ||
        ((i===selectedI+2 || i===selectedI-2 ) &&( selectedJ+2===j|| selectedJ-2===j)) || 
        ((i===selectedI+3 || i===selectedI-3 ) &&( selectedJ+3===j|| selectedJ-3===j)) ||
        ((i===selectedI+4 || i===selectedI-4 ) &&( selectedJ+4===j|| selectedJ-4===j)) ||  
        ((i===selectedI+5 || i===selectedI-5 ) &&( selectedJ+5===j|| selectedJ-5===j)) || 
        ((i===selectedI+6 || i===selectedI-6 ) &&( selectedJ+6===j|| selectedJ-6===j)) ||
        ((i===selectedI+7 || i===selectedI-7 ) &&( selectedJ+7===j|| selectedJ-7===j)))
    { console.log("now Moving")
        console.log("we at  white Queen")
        console.log("i is :"+i+" and j is :"+j);
        console.log(CurrentElement.textContent);
    PreviousElement.innerHTML=""
    let newi=i;
    console.log(newi)
    let newj=selectedJ + (j-selectedJ);
    let newCoordinates = newi.toString()+newj.toString();
    let newele=document.getElementById(newCoordinates);
    newele.innerHTML="♕"
    newele.classList.add("newSoldier");
    }
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
    
    console.log("now Moving")
    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
}


    selectedSoldier=" "
    selectedI=" "
    selectedJ=" "
       
}
    }
return(

<div className="container">
    {
       board.map((element,i)=>
           <div key={i}>{
           board[i].map((ele,j)=>
            
        j===1?
        <div className={(i%2===j%2?"oddSquare":"evenSquare")} type={"BlackPawn"}  id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j} ><span className="soldier">♟</span></div>: // drawin black pawns
         j===6?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j}><span className="soldier">♙</span></div>:// drawing white pawns
         j===7&&i===3?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j}><span className="soldier">♔</span></div>:// drawing white king
         j===7&&i===4?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j}><span className="soldier">♕</span></div>:// drawing white Queen
         j===7&&(i===0||i===7)?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j}><span className="soldier">♖</span></div>:// drawing white Rook
         j===7&&(i===2||i===5)?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j}><span className="soldier">♗</span></div>:// drawing white Bishop
         j===7&&(i===1||i===6)?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j}><span className="soldier">♘</span></div>:// drawing white king
         j===0&&i===3?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j} ><span className="soldier">♚</span></div>:// drawing white king
         j===0&&i===4?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j} ><span className="soldier">♛</span></div>:// drawing Black Queen
         j===0&&(i===0||i===7)?<div  className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j} ><span className="soldier">♜</span></div>:// drawing Black Rook
         j===0&&(i===2||i===5)?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)} key={ele} i={i} j={j} ><span className="soldier">♝</span></div>:// drawing Black Bishop
         j===0&&(i===1||i===6)?<div className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} onClick={(e)=>clickhandler(i,j)}  key={ele} i={i} j={j} ><span className="soldier">♞</span></div>:// drawing Black knight
         <div onClick={(e)=>clickhandler(i,j)} className={i%2===j%2?"oddSquare":"evenSquare"} id={ele} key={ele} i={i} j={j}></div>

        )}</div>)}
</div>
)
}