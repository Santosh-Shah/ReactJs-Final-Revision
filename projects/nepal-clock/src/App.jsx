import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentDateTime from "./components/CurrentDateTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

  let currDateTime = new Date();

  return (
    <div>
      <ClockHeading />
      <ClockSlogan />
      <CurrentDateTime />
    </div>
  );
}

export default App;