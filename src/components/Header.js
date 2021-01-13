import React from "react";
import img from "../images/chess.png";

export default class Header extends React.Component {
  render() {
    return (
      <header className="center">
        <img src={img} alt="" />
        <h1>Chess Game by RomJ55</h1>
      </header>
    );
  }
}
