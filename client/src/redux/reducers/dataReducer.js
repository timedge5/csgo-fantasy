import { SET_PLAYERS } from "../types";

const initialState = {
    players: [],
}

export default function (state = initialState, {type, payload}) {
    switch(type) {
        case SET_PLAYERS:
            return {
                ...state,
                players: payload
            }
        default:
            return state;
    }
}