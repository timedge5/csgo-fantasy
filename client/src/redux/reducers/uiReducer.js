import { SET_ROLE, SET_PRICE, TOGGLE_NAV_DRAWER} from "../types";

const initialState = {
  role: 'all',
  price: 4,
  nav_open: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_ROLE:
      return {
        ...state,
        role: payload,
      };
    case SET_PRICE:
      return {
        ...state,
        price: payload,
      };
    case TOGGLE_NAV_DRAWER:
      return {
        ...state,
        nav_open: !state.nav_open
      }
    default:
      return state;
  }
}
