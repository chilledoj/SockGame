import React, { useState } from "react";
import {
  GAMETYPE_RANDOM,
  GAMETYPE_ORDERED,
  GAMETYPE_UNIQUE
} from "../../store";
import "./spin.css"

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
      {currentItem && (
          <div className="is-horizontal-align">
            <button onClick={registerWin("blue", currentItem)} className="button is-rounded" style={{backgroundColor: 'blue', color: 'white'}}>Blue win</button>
            <button onClick={registerWin("red", currentItem)} className="button is-rounded" style={{backgroundColor: 'red', color: 'white'}}>Red win</button>
          </div>
        )}
      <div>
        <button onClick={doSpin} className="button primary">
          {currentItem === null ? "Start" : "Spin"}
        </button>
        <div className="card-container">
          {game.gameItems.map((itm) => (
            <div
              key={itm.txt}
              className={"card"+(currentItem && currentItem.txt === itm.txt ? " active" : "")}
            >
              <header className={currentItem && currentItem.txt === itm.txt ? "active" : null}>
                <h4>{currentItem && currentItem.txt === itm.txt ? "=> " : ""}
                {itm.txt}
                </h4>
              </header>
              {itm.icon && <div className="icon-box">{itm.icon.cmp}</div>}
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default Spinner;
