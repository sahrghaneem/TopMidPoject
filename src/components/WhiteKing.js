
// import React from 'react';
// export default function WhiteKingPiece() {
//     return(
//         <div className="soldier">♔</div>
//     )
// }

//   if(CurrentElement.textContent==="♟")
        //   {
        //     let isBlocked=checkPawnPath(i,j)
        //     if(!isBlocked)
        //     {
        //         let pathJ=j+1
        //         let greenCoordinates = i.toString()+pathJ.toString();
        //         let greenElement= document.getElementById(greenCoordinates)
        //         greenElement.classList.add("canMove")
        //     }
        //   }

        function checkknightBPath(i,j){
                let pathJ=j+2
                let pathCoordinates = i.toString()+pathJ.toString();
                let pathElement= document.getElementById(pathCoordinates)
                if(pathElement.textContent==="")
                    return 0
                return 1
            }
            

        