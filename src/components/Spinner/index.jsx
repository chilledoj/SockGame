import { useState } from "react";
import {
  GAMETYPE_RANDOM,
  GAMETYPE_ORDERED,
  GAMETYPE_UNIQUE
} from "../../store";

const Spinner = ({ game, registerWin, setIndex }) => {
  const [currentItem, setCurrentItem] = useState(null);

  const doSpin = (e) => {
    e.preventDefault();
    switch (game.gameType) {
      case GAMETYPE_RANDOM:
        const randIdx = 0 | (Math.random() * game.gameItems.length);
        setCurrentItem(game.gameItems[randIdx]);
        break;
      case GAMETYPE_UNIQUE:
        let idx =
          ((game.currentIdx ? game.currentIdx : 0) + 1) % game.randItems.length;
        setIndex(idx);
        setCurrentItem(game.randItems[idx]);
        break;
      case GAMETYPE_ORDERED:
        const orandIdx = 0 | (Math.random() * game.gameItems.length);
        let oidx =
          ((game.currentIdx !== null ? game.currentIdx : orandIdx) + 1) %
          game.gameItems.length;
        setIndex(oidx);
        setCurrentItem(game.gameItems[oidx]);
        break;
      default:
        break;
    }
    return false;
  };

  return (
    <>
      <div>
        <button onClick={doSpin}>
          {currentItem === null ? "Start" : "Spin"}
        </button>
        <ul>
          {game.gameItems.map((itm) => (
            <li
              key={itm.txt}
              style={{
                fontWeight:
                  currentItem && currentItem.txt === itm.txt ? "bold" : null
              }}
            >
              {currentItem && currentItem.txt === itm.txt ? "=> " : ""}
              {itm.txt}
            </li>
          ))}
        </ul>
      </div>
      {currentItem && (
        <div>
          <button onClick={registerWin("blue", currentItem)}>Blue win</button>
          <button onClick={registerWin("red", currentItem)}>Red win</button>
        </div>
      )}
    </>
  );
};

export default Spinner;
