import App from "@/App.tsx";
import globalStyles from "@/global-styles.ts";
import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>
);
