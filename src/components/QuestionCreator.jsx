import React from "react";

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

  return (
    <>
      <ul>
        {questions.map(({ question, answer }, index) => (
          <CreateQuestions key={index} id={index} question={question} answer={answer} />
        ))}
      </ul>

    </>
  );
}

function CreateQuestions(props) {
  const {id, question, answer} = props
  const [showQuestion, setShowQuestion] = React.useState(false);

  return !showQuestion ? (
    <li onClick={() => setShowQuestion(true)}>
      <h3>Pergunta {id + 1}</h3>
      <img className="play-button" src={playButton} alt="play icon" />
    </li>
  ) : (
    <li className="selected">
      <h3>{question}</h3>
      <img src={turnButton} alt="turn icon" />
    </li>
  );
}
