import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "modern-normalize";
import LangProvider from "./lang-ctx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
