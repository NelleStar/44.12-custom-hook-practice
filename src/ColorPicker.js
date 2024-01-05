import useLocalStorageState from "./hooks/useLocalStorageState";

const ColorPicker = () => {
    const [color, setColor] = useLocalStorageState("color", "blue");

    const changeColor = e => {
        setColor(e.target.value)
    }

    return (
        <>
            <h1 style={{color}}>Your color is {color}</h1>
            <select value={color} onChange={changeColor}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="violet">Violet</option>
            </select>
        </>
    )
}

export default ColorPicker;