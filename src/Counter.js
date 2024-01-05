import useLocalStorageState from "./hooks/useLocalStorageState"

const Counter = () => {
    const [count, setCount] = useLocalStorageState('count', 0)
    // // orignal way of having it - make a custom hook in useLocalStorageState.js
    // const [count, setCount] = useState(() => {
    //     let value;
    //     value = JSON.parse(window.localStorage.getItem("count") || 0);
    //     return value;
    // });

    // useEffect(() => {
    //     window.localStorage.setItem("count", count);
    // }, [count]);

    const addToCount = () => {
        setCount(count => count + 1)
    }

    return (
        <>
            <h4>{count}</h4>
            <button onClick={addToCount}>Add</button>
        </>
    )
}

export default Counter;