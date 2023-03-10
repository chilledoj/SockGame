import Spinner from "../Spinner";
import useGameStore from "../../store";
import ScoreBar from "../ScoreBar";
import NewGameForm from "./newGameForm";
import EndGameDetails from "./EndGameDetails";

const Game = () => {
  const [game, newGame, exitGame, addWin, setIndex] = useGameStore();

  const exitGameplay = (e) => {
    e.preventDefault();
    exitGame();
  };

  const registerWin = (team, item) => (e) => {
    e.preventDefault();
    addWin(team, item);
  };

  if (!game) {
    return <NewGameForm createNewGame={newGame} />;
  }

  if (game.status === "end") {
    return <EndGameDetails game={game} exitGame={exitGame} />;
  }

  return (
    <>
      <section style={{marginBottom:"2rem"}}>
        <div style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <h4>Game / {game.id} <span className="tag">{game.gameType}</span></h4>
          <div><button onClick={exitGameplay} className="button dark">x</button></div>
        </div>
      </section>
      <section className="is-center" style={{marginBottom:"2rem"}}>
        <div style={{marginRight: '2rem'}} className="card">
          <header style={{backgroundColor:"var(--color-blue)", color:"white", padding: "0.1rem", textAlign: 'center'}}>
            <h3>Blue</h3>
          </header>
          <ScoreBar current={game.blue} max={game.maxPoints} team="blue" />
        </div>
        <div className="card">
          <header style={{backgroundColor:"var(--color-red)", color:"white", padding: "0.1rem", textAlign: 'center'}}>
            <h3>Red</h3>
          </header>
          <ScoreBar current={game.red} max={game.maxPoints} team="red" />
        </div>
      </section>
      <section style={{marginBottom:"2rem"}}>
        <Spinner game={game} registerWin={registerWin} setIndex={setIndex} />
      </section>
    </>
  );
};

export default Game;
