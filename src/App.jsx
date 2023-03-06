import Game from "./components/Game";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Sock Game</h1>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}
