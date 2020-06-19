import { SET_PLAYERS } from "../types";
import axios from "axios";

// get all players
export const getPlayers = () => (dispatch) => {
  axios
    .get("/players")
    .then((res) => {
      dispatch({ type: SET_PLAYERS, payload: res.data });
    })
    .catch((err) => console.log(err));
};
