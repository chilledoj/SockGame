import {useState} from 'react';
import Spinner from "../Spinner";
import useGameStore from "../../store";
import ScoreBar from "./ScoreBar";
import NewGameForm from "./newGameForm";
import EndGameDetails from "./EndGameDetails";
import Header from "../Header";
import {
  GAMETYPE_RANDOM,
  GAMETYPE_ORDERED,
  GAMETYPE_UNIQUE
} from "../../store";
import SpinItem from "./SpinItem";

import "./game.css";

const Game = () => {
  const [game, newGame, exitGame, addWin, setIndex] = useGameStore();
  const [currentItem, setCurrentItem] = useState(null)

  const exitGameplay = (e) => {
    e.preventDefault();
    exitGame();
  };

  const registerWin = (team) => (e) => {
    e.preventDefault();
    if(!currentItem) return false;
    addWin(team, currentItem);
  };

  const randomfn = (_) => {
    switch (game.gameType) {
      case GAMETYPE_RANDOM:
        const randIdx = 0 | (Math.random() * game.gameItems.length);
        setCurrentItem(game.gameItems[randIdx]);
        return game.gameItems[randIdx]
        // break;
      case GAMETYPE_UNIQUE:
        let idx =
          ((game.currentIdx ? game.currentIdx : 0) + 1) % game.randItems.length;
        setIndex(idx);
        setCurrentItem(game.randItems[idx]);
        return game.randItems[idx]
        // break;
      case GAMETYPE_ORDERED:
        const orandIdx = 0 | (Math.random() * game.gameItems.length);
        let oidx =
          ((game.currentIdx !== null ? game.currentIdx : orandIdx) + 1) %
          game.gameItems.length;
        setIndex(oidx);
        setCurrentItem(game.gameItems[oidx]);
        return game.gameItems[oidx]
        // break;
      default:
        return 0
    }
  };

  if (!game) {
    return (
    <>
    <Header />
    <main>
      <NewGameForm createNewGame={newGame} style={{marginTop: '3rem'}}/>
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
        <div className="col">
          <h3 style={{backgroundColor:"var(--color-blue)", color:"white", padding: "0.1rem", textAlign: 'center'}} 
          onClick={registerWin('blue')}>
            Blue
          </h3>
          <ScoreBar current={game.blue} max={game.maxPoints} team="blue" />
        </div>
        <div className="col">
          <h3 style={{backgroundColor:"var(--color-red)", color:"white", padding: "0.1rem", textAlign: 'center'}}
          onClick={registerWin('red')}>
            Red
          </h3>
          <ScoreBar current={game.red} max={game.maxPoints} team="red" />
        </div>
      </section>
      <section style={{marginBottom:"2rem"}} id="spin-section">
        <Spinner items={game.gameItems} transitionPeriod={game.spinTime} horizontal randomFn={randomfn} renderItem={({item, size, ...props}) => <SpinItem item={item} size={size} {...props} />}/>
      </section>
      </main>
    </>
  );
};

export default Game;
