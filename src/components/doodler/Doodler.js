import "./doodler.css";
import { useSelector } from "react-redux";

const Doodler = () => {
  const move = useSelector((state) => {
    return state.reducer.move;
  });
  console.log(move);
  return (
    <div
      className="doodler"
      style={{ left: `${move}px`, bottom: `150px` }}
    ></div>
  );
};

export default Doodler;
