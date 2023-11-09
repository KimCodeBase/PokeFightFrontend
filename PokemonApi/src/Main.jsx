import ReactDOM from "react-dom/client";
// import App from ";
import App from "./Components/App";
// import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
