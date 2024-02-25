import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://dino-hacks.kintone.com/k/v1/record.json?app=4&id=2",
          {
            headers: {
              "X-Cybozu-API-Token": "qIGBRlV8dC2TR0qgUhAMbk3h0JaTAKgkqg8rmHOQ",
              "Content-Type": "application/json", // Example of adding a Content-Type header
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures effect runs only once after initial render

  return (
    <>
      <h1>Under Construction</h1>
    </>
  );
}

export default App;
