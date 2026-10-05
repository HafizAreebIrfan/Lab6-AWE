import { createStore } from "redux";
import { counterReducer } from "./userreducer";
const store = createStore(counterReducer);
export default store;
