import React, { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DetailChili from "./shop/DetailChili";
const About = lazy(() => import("./about/About"));
const MainPage = lazy(() => import("./mainPage/MainPage"));
const Contact = lazy(() => import("./contact/Contact"));
const Shop = lazy(() => import("./shop/Shop"));
const ChiliForm = lazy(() => import("./shop/crud/AddEditChili"));
import Cart from "./cart/Cart";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<DetailChili />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<ChiliForm />} />
        <Route path="/form/:id" element={<ChiliForm />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
