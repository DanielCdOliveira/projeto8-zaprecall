import ReactDom from "react-dom";
import Page1 from "./Page1";

function App() {
  return (
    <main>
      <img className="logo-start" src="assets/img/logo.png" alt="logo start" />
      <h1>ZapRecall</h1>
      <button className="btn-start" onClick={() => renderPage("page1")}>
        Iniciar Recall!
      </button>
    </main>
  );
}

function renderPage(page) {
  switch (page) {
    case "page1": {
      ReactDom.render(<Page1 />, document.querySelector(".root"));
    }
  }
}
ReactDom.render(<App />, document.querySelector(".root"));
