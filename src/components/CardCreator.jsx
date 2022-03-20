// import React from "react";

// import turnButton from "./../assets/img/turn.png";

// export default function CardCreator(props) {
//   const { question, answer, ScoreCreator } = props;
//   const [turnCard, setTurnCard] = React.useState(false);
//   // const [score, setScore] = React.useState("");


  
//   function ChangeScore (newScore){
//     ScoreCreator(newScore)
//   }

//   return !turnCard ? (
//     <li className="selected" onClick={() => setTurnCard(true)}>
//       <h3>{question}</h3>
//       <img src={turnButton} alt="turn icon"  />
//     </li>
//   ) : (
//     <li className="selected">
//       <h3>{answer}</h3>
//       <div className="buttons">
//         <button className="wrong" onClick={() => ChangeScore("wrong") }>Não lembrei</button>
//         <button className="almost" onClick={() => ChangeScore("almost") }>Quase não lembrei</button>
//         <button className="right" onClick={() => ChangeScore("right") }>Zap!</button>
//       </div>
//     </li>
//   );
// }
