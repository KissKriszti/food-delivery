import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ServicePage from "./components/ServicePage/ServicePage";
import OurMenu from "./components/OurMenu/OurMenu";
import Contacts from "./components/Contacts/Contacts";
import FormOrder from "./components/Form/FormOrder";

function App() {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  const [order, setOrder] = useState([]);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <Header dimensions={dimensions} order={order} setOpenForm={setOpenForm} />
      <WelcomePage />
      <ServicePage />
      <OurMenu setOrder={setOrder} dimensions={dimensions} />
      <Contacts />
      {openForm && (
        <FormOrder
          order={order}
          setOpenForm={setOpenForm}
          setOrder={setOrder}
        />
      )}
    </div>
  );
}

export default App;
