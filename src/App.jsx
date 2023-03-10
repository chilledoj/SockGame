import Game from "./components/Game";
import "chota";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <header>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="#">Sock Game</a>
          </div>
        </nav>
      </header>
      <main>
        <Game />
      </main>
    </div>
  );
}
