import React from 'react';
import './App.css';
import Game from './components/Game.tsx';
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Game/>
    </div>
    </Provider>
  );
}

export default App;
