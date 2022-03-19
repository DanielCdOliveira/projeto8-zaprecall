import QuestionCreator from "./QuestionCreator.jsx"
import logoPequeno from "./assets/img/logo-pequeno.png"

export default function QuestionsPage() {
  return (
    <main>
      <header>
        <img src={logoPequeno} alt="logo header" />
        <h2>ZapRecall</h2>
      </header>
      <QuestionCreator />
      
    </main>
  );
}
