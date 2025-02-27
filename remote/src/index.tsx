import { createRoot } from "react-dom/client";
import App from "./App";
import "./assets/styles/global.scss";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
