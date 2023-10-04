import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <div className="min-h-screen bg-background font-sans antialiased"> */}
    <App />
    {/* </div> */}
  </React.StrictMode>
);
