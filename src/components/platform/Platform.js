import "./platform.css";
import { useState } from "react";

const Platform = (props) => {
  const [topMove, setTopMove] = useState(0);
  const verticalMove = () => {
    if (topMove <= 670)
      setTimeout(() => {
        setTopMove(topMove + 1);
      }, 5);
  };
  verticalMove();
  return (
    <div
      className="platform"
      style={{ left: `${props.horizontal}px`, top: `${topMove}px` }}
    ></div>
  );
};

export default Platform;
