import YesNoSec from "./yesNoSec";
import "./App.css";
function LateNight(props) {
  return (
    <div className="App">
      <header className="App-header">
        <YesNoSec h1Q="Is it morning?" nextQ="notG" NoAnextQ="endQ" />
      </header>
    </div>
  );
}
export default LateNight;
