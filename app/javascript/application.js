import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import ProductPage from "./components/ProductPage";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!! Let's start✨");

  const container = document.getElementById("root");
  const root = createRoot(container);

  // poor man's routing
  if (window.location.pathname === "/product") {
    root.render(<ProductPage />);
  } else {
    root.render(<App />);
  }
});
