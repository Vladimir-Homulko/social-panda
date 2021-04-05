import { combineReducers, createStore } from "redux";
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';

let reducersHeap = combineReducers({
    profileReduser,
    dialogsReduser
});

let store = createStore(reducersHeap);

export default store;