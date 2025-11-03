// -------------------------------------
// 📦 Entry Point (index.js)
// -------------------------------------
// This file is responsible for mounting the root React component (App)
// into the HTML DOM element with id="root".

import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ modern API
import App from "./App"; // Import main App component
import "./index.css"; // Global styles

// Create a root and render the <App /> component inside <React.StrictMode>
// StrictMode helps detect potential issues during development (only in dev mode)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
