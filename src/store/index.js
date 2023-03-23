import { useReducer } from "react";
import items from "./items";
import shuffle from "./random";

export const GAMETYPE_RANDOM = "random";
export const GAMETYPE_UNIQUE = "unique";
export const GAMETYPE_ORDERED = "ordered";

function newGameID() {
  return "sg" + Date.now().toString(16);
}

function gameReducer(state, action) {
  switch (action.type) {
    case "newGame":
      const gameData = {
        id: newGameID(),
        status: "new",
        blue: 0,
        red: 0,
        maxPoints: Number(action.params.maxPoints),
        gameType: action.params.gameType,
        gameItems: [...items],
        randItems: shuffle([...items]),
        spinTime: action.params.spinTime,
        currentIdx: null,
        history: []
      };
      return gameData;
    case "exitGame":
      return null;
    case "addWin":
      const newState = { ...state, [action.team]: state[action.team] + 1 };

      newState.history = [
        ...state.history,
        { team: action.team, item: action.item }
      ];

      if (newState[action.team] === state.maxPoints) {
        newState.status = "end";
        newState.winners = action.team;
      }
      return newState;
    case "setIndex":
      return { ...state, currentIdx: action.idx };
    default:
      console.error("Didn't understand action %o", action);
  }
}

function useGameStore() {
  const [state, dispatch] = useReducer(gameReducer, null);

  const newGame = (gameParams) =>
    dispatch({ type: "newGame", params: gameParams });

  const addWin = (team, item) => dispatch({ type: "addWin", team, item });

  const exitGame = () => dispatch({ type: "exitGame" });

  const setIndex = (idx) => dispatch({ type: "setIndex", idx });

  return [state, newGame, exitGame, addWin, setIndex];
}

export default useGameStore;
