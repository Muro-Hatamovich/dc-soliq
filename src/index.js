import { StrictMode } from "react";
import { render } from "react-dom";
import "./import.scss";
import App from "./App";

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);
