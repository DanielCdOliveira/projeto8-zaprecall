import React from "react";

import turnButton from "./../assets/img/turn.png";

export default function (props) {
  const { question, answer } = props;
  const [turnCard, setTurnCard] = React.useState(false);

  return !turnCard ? (
    <li className="selected">
      <h3>{question}</h3>
      <img src={turnButton} alt="turn icon" onClick={() => setTurnCard(true)} />
    </li>
  ) : (
    <li className="selected">
      <h3>{answer}</h3>
      <div className="buttons">
        <button className="wrong">Não lembrei</button>
        <button className="almost">Quase não lembrei</button>
        <button className="right">Zap!</button>
      </div>
    </li>
  );
}
