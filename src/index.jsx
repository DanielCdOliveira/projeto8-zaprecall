import ReactDom from "react-dom";
import React from "react";
import QuestionsPage from "./components/QuestionsPage";
import StartPage from "./components/StartPage";

import "./css/reset.css";
import "./css/style.css";

function App() {
  const [startRecall, setStartRecall] = React.useState(false);

  return startRecall ? (
    <QuestionsPage />
  ) : (
    <StartPage setStartRecall={setStartRecall} />
  );
}

ReactDom.render(<App />, document.querySelector(".root"));
