import React, { Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import "./index.css";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import "aos/dist/aos.css";

const store = configureStore();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ReduxProvider store={store}>
      <Suspense fallback="Loading..">
        <Router>
          <App />
        </Router>
      </Suspense>
    </ReduxProvider>
  </StrictMode>
);
