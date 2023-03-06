import Spinner from "../Spinner";
import useGameStore from "../../store";
import ScoreBar from "../ScoreBar";
import NewGameForm from "./newGameForm";

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
    return (
      <div>
        <h2 style={{ color: game.winners }}>{game.winners} are the winners</h2>
        <p>
          <span>{game[game.winners]}</span>
          <span>&nbsp; - &nbsp;</span>
          <span>{game.winners === "blue" ? game.red : game.blue}</span>
        </p>
        <button onClick={exitGameplay}>Reset</button>
        <ul>
          {game.history.map((h, i) => (
            <li key={i}>
              <span
                style={{
                  display: "inline-block",
                  minWidth: "1 rem",
                  width: "1rem",
                  height: "1 rem",
                  backgroundColor: h.team
                }}
              >
                &nbsp;
              </span>{" "}
              {h.item.txt}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <section>
        <div>
          <h4>Game ID: {game.id}</h4>
          <p>{game.gameType}</p>
        </div>
        <div>
          <button onClick={exitGameplay}>Exit Game</button>
        </div>
      </section>
      <section>
        <div>
          <h6>Blue</h6>
          <ScoreBar current={game.blue} max={game.maxPoints} />
        </div>
        <div>
          <h6>Red</h6>
          <ScoreBar current={game.red} max={game.maxPoints} />
        </div>
      </section>
      <section>
        <Spinner game={game} registerWin={registerWin} setIndex={setIndex} />
      </section>
      <section></section>
    </>
  );
};

export default Game;
