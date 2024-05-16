import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!! Let's start✨");

  const container = document.getElementById("root");
  const root = createRoot(container);
  root.render(<App />);
});
