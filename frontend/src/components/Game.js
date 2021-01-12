import React, { useState, useEffect } from "react";
import axios from "axios";
import Timer from "./Timer";
import Board from "./Board";
import Footer from "./Footer";
import End from "./End";

const Game = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [squares, setSquares] = useState([[]]);
  const [turn, setTurn] = useState([]);
  const [running, setRunning] = useState([]);
  // const [selectedSquare, setSelectedSquare] = useState(-1);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://reactchess55.herokuapp.com/api/chess`
      );
      setData(JSON.parse(result.data));
      setLoading(false);
    };
    fetchItems();
    setSquares(data.board);
    setTurn(data.turn);
    setRunning(data.game_running);
  }, [data]);

  const giveUpHandler = () => {
    axios
      .post(`https://reactchess55.herokuapp.com/api/chess/startend`, {
        command: "end",
      })
      .then(function (response) {
        console.log(response);
        // setIsWinner(data.is_winner);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const startGameHandler = () => {
    axios
      .post(`https://reactchess55.herokuapp.com/api/chess/startend`, {
        command: "start",
      })
      .then(function (response) {
        console.log(response);
        // setIsWinner(data.is_winner);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      {loading ? (
        <h3 className="center" style={{ marginTop: 200, fontSize: 40 }}>
          Loading.....
        </h3>
      ) : null}
      {running ? (
        <div className="game">
          <div className="top-timer">
            <Timer timer={data.black_time} timeoutHandler={giveUpHandler} />
          </div>
          <Board squares={squares} rows={data.rows} columns={data.columns} />
          <Footer
            turn={turn}
            whiteTime={data.white_time}
            giveUpHandler={giveUpHandler}
          />
        </div>
      ) : (
        <End winner={data.winner} startGameHandler={startGameHandler} />
      )}
    </div>
  );
};

export default Game;
