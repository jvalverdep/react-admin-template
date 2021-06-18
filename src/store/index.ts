import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import sagaMiddleware from "./middlewares/saga";

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;
