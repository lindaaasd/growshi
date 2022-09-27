import React, { lazy } from "react";
import Header from "./common/Header";
import GlobalStyle from "../style/Global.style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AnimatedRoutes from "./AnimatedRoutes";

const Footer = lazy(() => import("./footer/Footer"));

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <section>
        <AnimatedRoutes />
        <ToastContainer autoClose={3000} />
      </section>
      <footer>
        <Footer />
      </footer>
      <GlobalStyle />
    </>
  );
}

export default App;
