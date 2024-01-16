import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Registro from "./components/Registro/Registro";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Detalles/:detalleSku" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
