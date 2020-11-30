import { createStore , combineReducers } from "redux";
import userReducer from "./reducers/user";
import {composeWithDevTools} from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist"
import { AsyncStorage } from "react-native";

//reducerをまとめたrootReducerの生成
const rootReducer = combineReducers({
  user:userReducer,
});

const persistConfig = {
  key:"root",
  storage: AsyncStorage,
  whitelist:["user"],
};


const persistedReducer = persistReducer(persistConfig, rootReducer)

//rootReducerを第一引数に、デバッガーツールの実行を第二引数にしてstoreを生成
const store = createStore(persistedReducer , composeWithDevTools());

export const persistor = persistStore(store);
export default store;