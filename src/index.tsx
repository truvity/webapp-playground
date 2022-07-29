import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Unknown root element");

const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
