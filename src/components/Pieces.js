// // import React from "react";

// // export default function Piece() {
// //     const[player,setPlayer]=React.useState()
// // } 



// import React from 'react';
// import GameTile from "./GameTile"
// import WhitePawn from './WhitePawn'
// import WhiteKing from './WhiteKing';
// import WhiteQueen from './WhiteQueen';
// import WhiteBishop from './WhiteBishop';
// import WhiteKnight from './WhiteKnight';
// import WhiteRook from './WhiteRook';

// import BlackPawn from './BlackPawn'
// import BlackKing from './BlackKing';
// import BlackQueen from './BlackQueen';
// import BlackBishop from './BlackBishop';
// import BlackKnight from './BlackKnight';
// import BlackRook from './BlackRook';
// export default function Chess() {
//     // const [arr]=React.useState(["A","B","C","D","E","F","G","H"])
//     // const[square,setSquare]=React.useState(["1","2","3","4","5","6","7","8"])
//     const [board] = React.useState([
//         ['00','01','02','03','04','05','06','07'],
//         ['10','11','12','13','14','15','16','17'],
//         ['20','21','22','23','24','25','26','27'],
//         ['30','31','32','33','34','35','36','37'],
//         ['40','41','42','43','45','46','47','48'],
//         ['50','51','52','53','54','55','56','57'],
//         ['60','61','62','63','64','65','66','67'],
//         ['70','71','72','73','74','75','76','77']
//     ])
// //     const[image]=React.useState('')
// //     console.log(arr);
// //     console.log(square);

// //     for(let i=0 ; i < board.length ; i++){
// //         for(let j =0 ; j < board[i].length ; j++){
// //             <Chiild i={i} j={j} item={board[i][j]} onPress = {} player{i==0 || i===1 ? 1 : 2} />
// //         }
// //     } 

// //     // React.useEffect (()=>{
// //     // InsertPieces()
// //     // },[])
// //     const InsertPieces =(e)=>{
// //          // if(e.target.textContent=='1A') {return e.target.value=<img src='../imges/Chess_Bishop1.png'></img> }
// //   // if(e.target.innerText==="1A"){
// //       let pieceId= document.getElementById(`${e.target.id}`)
// //       pieceId.innerHTML=`<br><img src='https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'></img>`
    
// //    // console.log((e.target.id));
// //     }
// const BlackPawnHandleClicker =(e) =>
// {
//     if(e.target.id=='67'){
//     let pieceId = document.getElementById(`${e.target.id}`)
//     console.log(pieceId);
//     }
// }
// return(
// //     <div className="container">   
// //     {board.map((row,i)=>
// //     <div key={i} > =
// //     {board[i].map((column,j)=>
// //     j%2? // are we on odd column ? 
// //     i%2? // are we on odd row ?
// //     <div className="oddSquare" key={j} onClick={(e)=>InsertPieces(e)} id={`${row+column}`} >{row}{column} </div> // color odd
// //     :<div className="evenSquare" key={j} onClick={(e)=>InsertPieces(e)} id={`${row+column}`}>{row}{column}</div>//color even
// //     ://j%2 else , we are on even column now
// //     i%2===0? // are we on even row ? 
// //     <div className="oddSquare" key={j} onClick={(e)=>InsertPieces(e)}  id={`${row+column}`}>{row}{column} </div>//color even row
// //     :<div className="evenSquare" key={j} onClick={(e)=>InsertPieces(e)} id={`${row+column}`}>{row}{column}</div>//color odd row
// //     )}
// //     </div>
// //     )}
// //   </div>
// // onPress = {} player={i==0 || i===1 ? 1 : 2}
// // 
// // 
// // i={i} j={j} 

// <div className="container">
//     <div><GameTile><WhitePawn/></GameTile> </div>
//     {
      
//        board.map((element,i)=>
//            <div key={i}>{

//            board[i].map((ele,j)=>
//            j===1?
//            <div key={j} id={i+','+j} item={board[i][j]} onClick={(e)=>BlackPawnHandleClicker(e)} className={i%2===j%2?"oddSquare":"evenSquare"}><BlackPawn/></div>: // drawin black pawns
//             j===6?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"} ><WhitePawn/></div>:// drawing white pawns
//             j===7&&i===3?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><WhiteKing/></div>:// drawing white king
//             j===7&&i===4?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><WhiteQueen/></div>:// drawing white Queen
//             j===7&&(i===0||i===7)?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><WhiteRook/></div>:// drawing white Rook
//             j===7&&(i===2||i===5)?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><WhiteBishop/></div>:// drawing white Bishop
//             j===7&&(i===1||i===6)?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><WhiteKnight/></div>:// drawing white king
//             j===0&&i===3?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><BlackKing/></div>:// drawing white king
//             j===0&&i===4?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><BlackQueen/></div>:// drawing Black Queen
//             j===0&&(i===0||i===7)?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><BlackRook/></div>:// drawing Black Rook
//             j===0&&(i===2||i===5)?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><BlackBishop/></div>:// drawing Black Bishop
//             j===0&&(i===1||i===6)?<div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}><BlackKnight/></div>:// drawing Black king
//             <div key={j} item={board[i][j]} className={i%2===j%2?"oddSquare":"evenSquare"}></div>
            
//             )}</div>)}
// </div>
// )
// }