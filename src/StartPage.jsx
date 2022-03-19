import logo from "./assets/img/logo.png"

export default function StartPage (props){
      return (
    <main>
      <img className="logo-start" src={logo} alt="logo start" />
      <h1>ZapRecall</h1>
      <button className="btn-start" onClick={() => props.setStartRecall(true)}>
        Iniciar Recall!
      </button>
    </main>
  );
}