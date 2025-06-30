import YesNoSec from "./yesNoSec";
import "./App.css";

function Pages() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="qSec">
          <YesNoSec h1Q="Is Moshe Grouchy?" nextQ="lateNight" NoAnextQ="notG" />
        </div>
      </header>
    </div>
  );
}
export default Pages;
