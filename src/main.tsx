import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./i18n";

import App from "./App.tsx";

const themeQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
const storedTheme = localStorage.getItem("theme");
const prefersDark = themeQuery?.matches ?? false;
const initialTheme = storedTheme === "dark" || storedTheme === "light" ? storedTheme : prefersDark ? "dark" : "light";

document.documentElement.dataset.theme = initialTheme;

if (storedTheme !== "dark" && storedTheme !== "light" && themeQuery) {
    const syncTheme = () => {
        if (localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === "light") {
            return;
        }

        document.documentElement.dataset.theme = themeQuery.matches ? "dark" : "light";
    };

    if (themeQuery.addEventListener) {
        themeQuery.addEventListener("change", syncTheme);
    } else {
        themeQuery.addListener(syncTheme);
    }
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
