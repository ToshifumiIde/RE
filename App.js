import React from "react";//reactパッケージのインストール
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";//store提供に必要。<Provider>で囲い、storeを継承することでapplication内でstoreが使用可能
import store , {persistor} from "./store";
import {PersistGate} from "redux-persist/integration/react";

export default function App() {
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppNavigator />
    </PersistGate>
  </Provider>
  );
}





//アロー関数の記載方法に修正
// const App = () => {
//   return(
//     <Provider store={store}>
//       <AppNavigator />
//     </Provider>
//   )
// }
// export default App;