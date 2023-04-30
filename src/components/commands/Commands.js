import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import "./commands.css";

const Commands = () => {
  const func = () => {
    console.log("function");
  };
  return (
    <div className="arrows-commands">
      <button className="command" onMouseDownCapture={func}>
        <BiLeftArrow className="arrow" />
      </button>
      <button className="command">
        <BiRightArrow className="arrow" />
      </button>
    </div>
  );
};

export default Commands;
