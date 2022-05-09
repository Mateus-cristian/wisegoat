import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App/App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Response from "./pages/Response";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
