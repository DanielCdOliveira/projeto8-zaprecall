import React from "react";

import wrong from "./../assets/img/wrong.png";
import almost from "./../assets/img/almost.png";
import right from "./../assets/img/right.png";
import sad from "./../assets/img/sad.png";
import party from "./../assets/img/party.png";
import playButton from "./../assets/img/play.png";
import turnButton from "./../assets/img/turn.png";

export default function QuestionCreator() {
  let deck = [
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
  const questions = deck.sort(() => {
    return (Math.random() - 0.5);
})
  const [score, setScore] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [miss, setMiss] = React.useState(false);

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
            setTotal={setTotal}
            setMiss={setMiss}
          />
        ))}
      </ul>

      <ScoreCreator score={score} total={total} miss={miss} />
    </>  
  );
}

function CreateQuestions(props) {
  const { id, question, answer, score, setScore, total, setTotal, setMiss } =
    props;
  const [showQuestion, setShowQuestion] = React.useState(false);
  const [classQuestion, setClassQuestion] = React.useState("");
  const [icon, setIcon] = React.useState(playButton);

  return !showQuestion ? (
    <li className={classQuestion} onClick={() => setShowQuestion(true)}>
      <h3>Pergunta {id + 1}</h3>
      <img className="play-button" src={icon} alt="play icon" />
    </li>
  ) : (
    <CardCreator
      question={question}
      answer={answer}
      score={score}
      setScore={setScore}
      total={total}
      setTotal={setTotal}
      setMiss={setMiss}
      setShowQuestion={setShowQuestion}
      setClassQuestion={setClassQuestion}
      setIcon={setIcon}
    />
  );
}

function CardCreator(props) {
  const {
    question,
    answer,
    score,
    setScore,
    total,
    setTotal,
    setMiss,
    setShowQuestion,
    setClassQuestion,
    setIcon,
  } = props;
  const [turnCard, setTurnCard] = React.useState(false);

  function ChangeScore(newScore) {
    score.push(newScore);
    if (newScore === "wrong") {
      setMiss(true);
      setClassQuestion("wrong");
      setIcon(wrong);
    }
    if (newScore === "almost") {
      setClassQuestion("almost");
      setIcon(almost);
    }
    if (newScore === "right") {
      setClassQuestion("right");
      setIcon(right);
    }

    setScore([...score]);
    setTotal(total + 1);
    setShowQuestion(false);
  }

  return !turnCard ? (
    <li className="selected" onClick={() => setTurnCard(true)}>
      <h5>{question}</h5>
      <img src={turnButton} alt="turn icon" />
    </li>
  ) : (
    <li className="selected">
      <h5>{answer}</h5>
      <div className="buttons">
        <button className="wrong-button" onClick={() => ChangeScore("wrong")}>
          Não lembrei
        </button>
        <button className="almost-button" onClick={() => ChangeScore("almost")}>
          Quase não lembrei
        </button>
        <button className="right-button" onClick={() => ChangeScore("right")}>
          Zap!
        </button>
      </div>
    </li>
  );
}

function ScoreCreator(props) {
  let { score, total, miss } = props;
  if (total !== 8) {
    return (
      <>
        <footer>
          <h4>{total}/8 CONCLUÍDOS</h4>
          <div className="score">
            {score.forEach((item, index) => {
              switch (item) {
                case "wrong":
                  return <img key={index} src={wrong} alt="" />;
                case "almost":
                  return <img key={index} src={almost} alt="" />;
                case "right":
                  return <img key={index} src={right} alt="" />;
                default:
                  break;
              }
            })}
          </div>
        </footer>
      </>
    );
  } else if (!miss) {
    return (
      <footer className="end">
        <div className="text">
          <img className="img-end" src={party} alt="" />
          <h3>Parabéns!</h3>
        </div>
        <h4 className="end-h4"> Você não esqueceu de nenhum flashcard!</h4>
        <h4>{total}/8 CONCLUÍDOS</h4>
        <div className="score">
          {score.forEach((item, index) => {
            switch (item) {
              case "wrong":
                return <img key={index} src={wrong} alt="" />;
              case "almost":
                return <img key={index} src={almost} alt="" />;
              case "right":
                return <img key={index} src={right} alt="" />;
              default:
                return;
            }
          })}
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="end">
        <div className="text">
          <img className="img-end" src={sad} alt="" />
          <h3>Putz...</h3>
        </div>
        <h4 className="end-h4">Ainda faltam alguns... Mas não desanime!</h4>
        <h4>{total}/8 CONCLUÍDOS</h4>
        <div className="score">
          {score.forEach((item, index) => {
            switch (item) {
              case "wrong":
                return <img key={index} src={wrong} alt="" />;
              case "almost":
                return <img key={index} src={almost} alt="" />;
              case "right":
                return <img key={index} src={right} alt="" />;
              default:
                return;
            }
          })}
        </div>
      </footer>
    );
  }
}
