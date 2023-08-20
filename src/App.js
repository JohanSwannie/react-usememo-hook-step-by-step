import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const [themeChangeCounter, setThemeChangeCounter] = useState(0);

  const calcNumber = useMemo(() => {
    return slowCalculation(number);
  }, [number]);

  const themeStyle = useMemo(() => {
    return {
      color: dark ? "white" : "navy",
      backgroundColor: dark ? "navy" : "cyan",
    };
  }, [dark]);

  const setDarkTheme = () => {
    setDark((prevDark) => !prevDark);
  };

  const handleThemeChangeCounter = () => {
    setThemeChangeCounter(
      (prevThemeChangeCounter) => prevThemeChangeCounter + 1
    );
  };

  return (
    <div className="App">
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />
      <button
        onClick={() => {
          setDarkTheme();
          handleThemeChangeCounter();
        }}
      >
        Change the Theme
      </button>
      <h3 style={themeStyle}>{calcNumber}</h3>
      <h3>Theme has been changed {themeChangeCounter} timess</h3>
    </div>
  );
}

export default App;

const slowCalculation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    return num * 5;
  }
};
