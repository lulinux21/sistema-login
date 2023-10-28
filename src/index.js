import { createRoot } from "react-dom/client";
import App from "./App";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
