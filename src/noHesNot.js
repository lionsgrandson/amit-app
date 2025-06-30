import "./App.css";
import { FaHeart } from "react-icons/fa";

function NoHesNot() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <FaHeart />
          {""} No hes not <FaHeart />
        </h1>
      </header>
    </div>
  );
}

export default NoHesNot;
