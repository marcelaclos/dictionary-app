import logo from "./logo.png";
import logos from "./fish.png";
import "./App.css";
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
         <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1>Welcome Dictionary App</h1>
        <p>The best way to explore the world</p>
        <img src={logos} className="App-logo img-fluid" alt="logos" />
      </header>
      <main>
        <Dictionary />
      </main>
<footer className="App-footer">
  <small>Coded by <a href="https://www.linkedin.com/in/marcelaclos/" target="_blank" rel="noopener noreferrer">Mars Clos</a> and is <a href="https://github.com/marcelaclos/dictionary-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a> and <a href="https://condescending-noether-247300.netlify.app/" target="_blank" rel="noopener noreferrer">hosted on Netlify</a></small>
  </footer>


      
      </div>
      </div>
  );
}
