import React from "react";
import { createRoot } from "react-dom/client"; // create a root React element
import { Provider } from "react-redux"; // connect React with Redux, provide redux store to entire React application
import { store } from "./app/store"; // import redux store
import { BrowserRouter } from "react-router-dom"; // react router
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // create a root where whole React application will be rendered inside there

root.render(
  // render whole React application into the given DOM
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
