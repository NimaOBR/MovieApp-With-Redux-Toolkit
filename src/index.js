import React from "react";
import ReactDOM from "react-dom/client";

// css
import "./index.scss";
// App.js

import App from "./App";

// react router dom @6.3.0
import { BrowserRouter } from "react-router-dom";

// Provider
import { Provider } from "react-redux";

// store
import {store} from "./redux/store";


 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
