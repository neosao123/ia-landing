import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";
import HelmetHeader from "./components/HelmetHeader";

import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import RefundPolicy from "./pages/RefundPolicy";


const App = () => {
  return (
    <>
      <HelmetProvider>
        <HelmetHeader />
        <Routes>
          <Route path="/" exact index element={<Home />} />
          <Route path="/terms" exact index element={<Terms />} />
          <Route path="/privacy" exact index element={<Privacy />} />
          <Route path="/refund-policy" exact index element={<RefundPolicy />} />
        </Routes>
      </HelmetProvider>
      <ToastContainer />
    </>
  );
};

export default App;
