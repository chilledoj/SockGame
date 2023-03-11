import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// if (window.matchMedia &&
//         window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       document.body.classList.add('dark');
//     }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
