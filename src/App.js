import Parallax from "./components/Parallax";
import slides from "../src/data/Movies.json";
import { Slider } from "./components/Slider";
import Home from "./components/Charts/Home";

function App() {
  return (
    <div className="bg-dark">
      <Slider slides={slides} />
      <Home />
      <Parallax />
    </div>
  );
}

export default App;
