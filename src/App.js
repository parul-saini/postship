import './App.css';
import NavbarComp from './components/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/orders" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
