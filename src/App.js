import "./App.css";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color Component */}
      {/* <RandomColor /> */}
      {/* Star Rating component */}
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
