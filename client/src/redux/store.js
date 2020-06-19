import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";
import uiReducer from "./reducers/uiReducer";
import { createLogger } from "redux-logger";

const logger = createLogger();

const middleware = [thunk, logger];

const reducers = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
