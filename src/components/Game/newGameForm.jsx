import { useState } from "react";

import {
  GAMETYPE_RANDOM,
  GAMETYPE_UNIQUE,
  GAMETYPE_ORDERED
} from "../../store";

const NewGameForm = ({ createNewGame }) => {
  const [gameData, setGameData] = useState({
    maxPoints: 10,
    gameType: GAMETYPE_RANDOM
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
          <div>
            <label for="maxPoints">First to:</label>
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
          <div>
            <h5>Spinner Type</h5>
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
        </fieldset>
        <button type="submit">New Game</button>
      </form>
    </div>
  );
};

export default NewGameForm;
