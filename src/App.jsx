import "./assets/css/reset.css";
import "./assets/css/darkAndLightThemes.css";
import "./assets/css/animations.css";
import "./assets/css/styles.css";
import FormTemplate from "./assets/components/FormTemplate.jsx";
import { useState } from "react";

export default function App() {
    const [themeClass, setThemeClass] = useState("light");
    document.body.classList.add("light");

    return (
        <>
            <FormTemplate setThemeClass={setThemeClass} />
        </>
    );
}
