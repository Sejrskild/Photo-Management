import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/appContext.jsx";
import { ThemeProvider } from "./components/theme-provider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </AppProvider>
  </StrictMode>
);
