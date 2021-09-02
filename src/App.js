import logo from "./logo.png";
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
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Mars Clos</small>
      </footer>
      </div>
      </div>
  );
}
