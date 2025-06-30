import YesAnswer from "./yesAnswer";
import NoAnswer from "./noAnswer";
import "./App.css";
function YesNoSec(props) {
  return (
    <section className={props.displayTxt}>
      <h1>{props.h1Q}</h1>
      <div className="fullpage">
        <div className="YesNoSec">
          <YesAnswer btnY={props.btnY} nextQ={props.nextQ} />
          <NoAnswer btnN={props.btnN} NoAnextQ={props.NoAnextQ} />
        </div>
      </div>
    </section>
  );
}
export default YesNoSec;
