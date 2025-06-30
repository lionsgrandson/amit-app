import YesNoSec from "./yesNoSec";

function EndQ(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Is it Late?</h1>
        <YesNoSec nextQ="notG" NoAnextQ="thenMaybe" />
      </header>
    </div>
  );
}
export default EndQ;
