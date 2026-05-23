import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContectProvider from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <ContectProvider>
    <App />
  </ContectProvider>
);
