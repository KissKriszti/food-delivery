import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";

function App() {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Header dimensions={dimensions} />
      <WelcomePage />
    </div>
  );
}

export default App;
