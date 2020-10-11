import React from "react";
import "./App.css";
import HomePage from "./Container/HomePage/homePage";
import store from './Redux/Store/store';
import { Provider as ReduxProvider } from "react-redux";

function App() {
  return (
    <ReduxProvider store={store}>
      <HomePage />
    </ReduxProvider>
  );
}

export default App;
