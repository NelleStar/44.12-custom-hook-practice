import { useState } from "react";
import useToggleState from "./hooks/useToggleState";

import './MoodClicker.css'


const MoodClicker = () => {
    // // moved to useToggleStatein hooks folder
    // const [isHappy, setIsHappy] = useState(true);
    // const [isDarkMode, setIsDarkMode] = useState(false);

    // const toggleMood = () => {
    //     setIsHappy((mood) => !mood);
    // };

    // const toggleDarkMode = () => {
    //     setIsDarkMode((mode) => !mode);
    // };

    const [isHappy, toggleIsHappy] = useToggleState();
    const [isDarkMode, toggleIsDarkMode] = useToggleState();
    return (
      <div className={isDarkMode ? "Clicker-dark" : "Clicker-light"}>
        <h1>{isHappy ? "😊" : "😭"}</h1>

        <button onClick={toggleIsHappy}>Change Mood</button>
        <button onClick={toggleIsDarkMode}>Toggle Dark/Light Mode</button>
      </div>
    );
}

export default MoodClicker;