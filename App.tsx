/* App Screens declared here */
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import HomeScreen from "./src/homeScreen/Home";

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;


