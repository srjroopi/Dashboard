import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./common/styles/global.css"
import { Provider } from "react-redux";
import { store } from "./components/redux/store"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
);
