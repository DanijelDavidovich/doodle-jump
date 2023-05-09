import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { commandActions } from "../../store/store";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./commands.css";

const Commands = () => {
  const [indicator, setIndicator] = useState(false);
  const test = () => {
    console.log("mouse up");
  };
  const dispatch = useDispatch();
  const moveRightHandler = () => {
    dispatch(commandActions.right());
  };
  const moveLeftHandler = () => {
    dispatch(commandActions.left());
  };
  return (
    <div className="arrows-commands">
      <button
        className="command"
        onMouseDown={test}
        onClick={moveLeftHandler}
        onMouseUp={test}
      >
        <BiLeftArrow className="arrow" />
      </button>
      <button className="command" onClick={moveRightHandler}>
        <BiRightArrow className="arrow" />
      </button>
    </div>
  );
};

export default Commands;
