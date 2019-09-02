import React from "react";
import { createStore } from "redux";
import reducers from "./reducers/index"
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";



const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <HomeScreen />
  </Provider>
);

export default App;
