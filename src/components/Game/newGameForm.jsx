import { useState } from "react";

import {
  GAMETYPE_RANDOM,
  GAMETYPE_UNIQUE,
  GAMETYPE_ORDERED
} from "../../store";

const NewGameForm = ({ createNewGame }) => {
  const [gameData, setGameData] = useState({
    maxPoints: 10,
    gameType: GAMETYPE_RANDOM,
    spinTime: 4
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewGame(gameData);
    return false;
  };

  const handleChangeOption = (e) => {
    setGameData({
      ...gameData,
      gameType: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Game Parameters</legend>
          <div className="row">
            <div className="col-3">
              <label htmlFor="maxPoints">First to:</label>
              <input
                type="number"
                name="maxPoints"
                value={gameData.maxPoints}
                min={1}
                max={20}
                step={1}
                onChange={(e) => {
                  setGameData({ ...gameData, maxPoints: e.target.value });
                }}
              />
            </div>
            <div className="col-3">
                <label
                htmlFor="spinTime"
                title="Starts from a random point, and then steps through the items in order."
              >
                Spin Time
              </label>
              <input
                type="number"
                name="spinTime"
                value={gameData.spinTime}
                min={2}
                max={10}
                step={1}
                onChange={(e) => {
                  setGameData({ ...gameData, spinTime: e.target.value });
                }}
              />
            </div>
            <div className="col-6">
              <h5>Spinner Type</h5>
              <div style={{display:"flex", flexDirection: "row", justifyContent:"space-around"}}>
              <div>
                <input
                type="radio"
                name="gametype"
                id={GAMETYPE_RANDOM}
                value={GAMETYPE_RANDOM}
                checked={gameData.gameType === GAMETYPE_RANDOM}
                onChange={handleChangeOption}
              />
              <label
                htmlFor={GAMETYPE_RANDOM}
                title="Randomly selects items - may product duplicates."
              >
                Random
              </label>
              </div>
              <div>
              <input
                type="radio"
                name="gametype"
                id={GAMETYPE_UNIQUE}
                value={GAMETYPE_UNIQUE}
                checked={gameData.gameType === GAMETYPE_UNIQUE}
                onChange={handleChangeOption}
              />
              <label
                htmlFor={GAMETYPE_UNIQUE}
                title="Selects items in a random order. No duplicates, but will loop around and repeat the same 'random' order."
              >
                Unique
              </label>
              </div>
              <div>
              <input
                type="radio"
                name="gametype"
                id={GAMETYPE_ORDERED}
                value={GAMETYPE_ORDERED}
                checked={gameData.gameType === GAMETYPE_ORDERED}
                onChange={handleChangeOption}
              />
              <label
                htmlFor={GAMETYPE_ORDERED}
                title="Starts from a random point, and then steps through the items in order."
              >
                Ordered
              </label>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            
          </div>
        </fieldset>
        <div className="is-right" style={{marginTop: "2rem"}}>
            <button type="submit" className="button">New Game</button>
        </div>
      </form>
    </div>
  );
};

export default NewGameForm;
