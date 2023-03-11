import Spinner from "../Spinner";
import useGameStore from "../../store";
import ScoreBar from "../ScoreBar";
import NewGameForm from "./newGameForm";
import EndGameDetails from "./EndGameDetails";
import Header from "../Header"

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
    return (
    <>
    <Header />
    <main style={{marginTop: '3rem'}}><NewGameForm createNewGame={newGame} />
    </main>
    </>
    )

  }

  if (game.status === "end") {
    return (
    <>
    <Header game={game} exitButton={<a onClick={exitGameplay} className="button outline dark">Exit</a>} />
    <main>
      <EndGameDetails game={game} exitGame={exitGame} />
    </main>
    </>
    )
  }

  return (
    <>
    <Header game={game} exitButton={<a onClick={exitGameplay} className="button outline dark">Exit</a>}/>
      <main>
      <section className="row is-center" style={{marginBottom:"2rem"}}>
        <div style={{marginRight: '2rem'}} className="col">
          <h3 style={{backgroundColor:"var(--color-blue)", color:"white", padding: "0.1rem", textAlign: 'center'}}>
            Blue
          </h3>
          <ScoreBar current={game.blue} max={game.maxPoints} team="blue" />
        </div>
        <div className="col">
          <h3 style={{backgroundColor:"var(--color-red)", color:"white", padding: "0.1rem", textAlign: 'center'}}>
            Red
          </h3>
          <ScoreBar current={game.red} max={game.maxPoints} team="red" />
        </div>
      </section>
      <section style={{marginBottom:"2rem"}}>
        <Spinner game={game} registerWin={registerWin} setIndex={setIndex} />
      </section>
      </main>
    </>
  );
};

export default Game;
