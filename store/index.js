import { createStore , combineReducers } from "redux";
import userReducer from "./reducers/user";
import {composeWithDevTools} from "redux-devtools-extension";

//reducerをまとめたrootReducerの生成
const rootReducer = combineReducers({
  user:userReducer,
});

//rootReducerを第一引数に、デバッガーツールの実行を第二引数にしてstoreを生成
const store = createStore(rootReducer , composeWithDevTools());

export default store;