import "./App.css";
import Doodler from "./components/doodler/Doodler";
import Commands from "./components/commands/Commands";
import background from "./images/background.png";

function App() {
  return (
    <div className="container">
      <div className="header"> Doodle Jump</div>
      <div className="content">
        <img src={background} alt="background" className="background" />
        <Doodler />
        <Commands />
      </div>
    </div>
  );
}

export default App;
