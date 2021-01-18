import React, { useState, useEffect } from "react";
import { socket } from "./socket";
import "./App.css";
import Header from "./components/Header";
import Game from "./components/Game";
import Spinner from "./components/Spinner";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = () => {
    socket.emit("data");

    socket.on("data", (arg) => {
      const res = JSON.parse(arg);
      setItems(res);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetch();
    return () => {
      socket.off("data");
    };
  }, []);

  return (
    <div className="container">
      <Header />
      {isLoading ? <Spinner /> : <Game items={items} updateData={fetch} />}
    </div>
  );
}

export default App;
