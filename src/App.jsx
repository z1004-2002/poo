import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Etudiant from "./pages/Etudiant";
import "./style/style.css"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/etudiant" element={<Etudiant/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
