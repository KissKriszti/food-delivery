import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ServicePage from "./components/ServicePage/ServicePage";
import OurMenu from "./components/OurMenu/OurMenu";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  const [order, setOrder] = useState([]);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Header dimensions={dimensions} order={order} />
      <WelcomePage />
      <ServicePage />
      <OurMenu setOrder={setOrder} dimensions={dimensions} />
      <Contacts />
    </div>
  );
}

export default App;
