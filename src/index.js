import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from "./redux/storeConfig";

function ToDo() {
  return (
    <Provider store={configureStore()}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<ToDo />, document.getElementById("root"));