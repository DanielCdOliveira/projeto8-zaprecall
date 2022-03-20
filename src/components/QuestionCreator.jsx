import React from "react";

import wrong from "./../assets/img/wrong.png";
import almost from "./../assets/img/almost.png";
import right from "./../assets/img/right.png";

import playButton from "./../assets/img/play.png";
import turnButton from "./../assets/img/turn.png";

export default function QuestionCreator() {
  const questions = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];

  const [score, setScore] = React.useState([]);
  let total = 0;

  return (
    <>
      <ul>
        {questions.map(({ question, answer }, index) => (
          <CreateQuestions
            key={index}
            id={index}
            question={question}
            answer={answer}
            score={score}
            setScore={setScore}
            total={total}
          />
        ))}
      </ul>

      <ScoreCreator score={score} total={total}/>
    </>
  );
}

function CreateQuestions(props) {
  const { id, question, answer, score, setScore, total } = props;
  const [showQuestion, setShowQuestion] = React.useState(false);

  return !showQuestion ? (
    <li onClick={() => setShowQuestion(true)}>
      <h3>Pergunta {id + 1}</h3>
      <img className="play-button" src={playButton} alt="play icon" />
    </li>
  ) : (
    <CardCreator
      question={question}
      answer={answer}
      score={score}
      setScore={setScore}
      total={total}
    />
  );
}

function CardCreator(props) {
  const { question, answer, score, setScore, total } = props;
  const [turnCard, setTurnCard] = React.useState(false);

  function ChangeScore(newScore) {
    score.push(newScore);
    console.log(score);
    setScore([...score]);
  
  }

  return !turnCard ? (
    <li className="selected" onClick={() => setTurnCard(true)}>
      <h3>{question}</h3>
      <img src={turnButton} alt="turn icon" />
    </li>
  ) : (
    <li className="selected">
      <h3>{answer}</h3>
      <div className="buttons">
        <button className="wrong" onClick={() => ChangeScore("wrong")}>
          Não lembrei
        </button>
        <button className="almost" onClick={() => ChangeScore("almost")}>
          Quase não lembrei
        </button>
        <button className="right" onClick={() => ChangeScore("right")}>
          Zap!
        </button>
      </div>
    </li>
  );
}

function ScoreCreator(props) {
  let { score, total } = props;
  return (
    <>
      <footer>
        <h4>{total}/8 CONCLUÍDOS</h4>
        <div className="score">
          {score.map((item,index) => {
            switch (item) {
              case "wrong":
                return <img key={index} src={wrong} alt="" />;
              case "almost":
                return <img key={index} src={almost} alt="" />;
              case "right":
                return <img key={index} src={right} alt="" />;
            }
          })}
        </div>
      </footer>
    </>
  );
}
// <img src={wrong} alt="" />
