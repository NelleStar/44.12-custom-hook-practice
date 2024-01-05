import { useState, useEffect } from "react";

const useLocalStorageState = (keyName, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedValue = window.localStorage.getItem(keyName);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(keyName, JSON.stringify(state));
  }, [keyName, state]);

  return [state, setState];
};

export default useLocalStorageState;
