import "./App.css";
import Doodler from "./components/doodler/Doodler";
import Commands from "./components/commands/Commands";
import background from "./images/background.png";
import Platform from "./components/platform/Platform";

function App() {
  const horizontalLocation = Math.floor(Math.random() * 276);
  return (
    <div className="container">
      <div className="header"> Doodle Jump</div>
      <div className="content">
        <img src={background} alt="background" className="background" />
        <Doodler />
        <Platform horizontal={horizontalLocation} />
        <Commands />
      </div>
    </div>
  );
}

export default App;
