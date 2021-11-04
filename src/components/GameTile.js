import React from 'react';
import WhitePawnPiece from './WhitePawn';


export default function TileGame(props) {

    const[placei,setPlaceI]=React.useState()
    const[placej,setPlaceJ]=React.useState()
    const[typeElemnt,setTypeElemnt]=React.useState()

    const HandleClicke =(e)=>{
    //    props.children[0].type===WhitePawnPiece?
    //        props.j?" ":" ":" "
       console.log(props.i);
        console.log(props.children);
        let newJ=props.j-1;
        console.log("new J is",newJ);
        let newI=props.i-1;
        console.log("new I is",newJ);
        let newcords=newJ.toString()+newI.toString();
        console.log("new coordinates is"+newcords);
        let newPos=document.getElementById(newcords)
        console.log("new position id",newPos)
        // newPos.innerHTML="hello";
    }


    return(
        <div key="1" className={props.i%2===props.j%2?"oddSquare":"evenSquare"} onClick={HandleClicke}>
                {props.children}
        </div>
    )
    
}