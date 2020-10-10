import React from "react";
import ReactDOM from "react-dom";
import "./public/stylesheets/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import currentPage from "./reducers";

const store = createStore(currentPage);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
