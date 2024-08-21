// import { ReactDOM } from "react";
// import App from "./App";

// ReactDOM.render(<App/>, document.getElementById("root"));

import { createRoot } from "react-dom/client";
import './index.css';

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter basename="/madhuka-devinda/">
        <App />
    </BrowserRouter>
)