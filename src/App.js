import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchItems = async () => {
    const result = await axios(`https://chessapi55.herokuapp.com/api/chess`);
    setItems(JSON.parse(result.data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <h3 className="center" style={{ marginTop: 200, fontSize: 40 }}>
          Loading.....
        </h3>
      ) : (
        <Game items={items} updateData={fetchItems} />
      )}
    </div>
  );
}

export default App;
