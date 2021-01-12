import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://reactchess55.herokuapp.com/api/chess`
      );
      setItems(JSON.parse(result.data));
      setIsLoading(false);
    };
    fetchItems();
  }, [items]);

  return (
    <div className="container">
      <Header />
      <Game items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
