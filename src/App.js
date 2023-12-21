import Parallax from "./components/Parallax";
import slides from "../src/assets/Movies.json";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="bg-dark">
      <Slider slides={slides} />
      <Parallax />
    </div>
  );
}

export default App;
