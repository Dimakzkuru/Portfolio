import ReactDOM from "react-dom/client"; // Use the 'client' import for React 18
import App from "./App.tsx"; // Your app component
import "./index.css"; // Your styles

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
