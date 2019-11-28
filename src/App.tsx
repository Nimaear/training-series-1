import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "store/configureStore";
import Counter from "./components/Counter";

const store = configureStore();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Counter />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
