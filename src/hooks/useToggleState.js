// // grabbed from Moodclicker - we are basically making a piece of state that starts as true or false and making a function to toggled state back and forth - brought this here for reference - still in MoodClicker commented out as well

// const [isHappy, setIsHappy] = useState(true);
// const [isDarkMode, setIsDarkMode] = useState(false);

// const toggleMood = () => {
//   setIsHappy((mood) => !mood);
// };

// const toggleDarkMode = () => {
//   setIsDarkMode((mode) => !mode);
// };


// below we are making a piece of state and a functin to toggle that piece of state and returning them both
import { useState } from "react";

const useToggleState = () => {
    const [state, setState] = useState(true);
    const toggleState = () => {
        setState(state => !state)
    }
    return [state, toggleState]
}

export default useToggleState;