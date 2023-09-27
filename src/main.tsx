import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ColorMode from "./providers/ColorMode.tsx";
import { Providers } from "./providers/Providers.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ColorMode>
        <Providers>
          <App />
        </Providers>
      </ColorMode>
    </BrowserRouter>
  </React.StrictMode>
);
