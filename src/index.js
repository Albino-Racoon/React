import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderApp(); // Call the renderApp function to initially render the app

// Later, you can call renderApp again to re-render the app with updated state or props
