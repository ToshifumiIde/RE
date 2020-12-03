import { createStore , combineReducers } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist"
// import { AsyncStorage } from "react-native";
import userReducer from "./reducers/user";
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key:"root",
  // storage: AsyncStorage,//どこに保存するか
  storage: storage,//どこに保存するか
  whitelist:["user"],
};

//reducerをまとめたrootReducerの生成
const rootReducer = combineReducers({
  user:userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

//rootReducerを第一引数に、デバッガーツールの実行を第二引数にしてstoreを生成
const store = createStore(persistedReducer , composeWithDevTools());

export const persistor = persistStore(store);
export default store;