import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import 'maplibre-gl/dist/maplibre-gl.css';

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
