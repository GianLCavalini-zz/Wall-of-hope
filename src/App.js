import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";
import { Instituição} from "./Components/Pages/Instituição/Instituição"
import { Register } from "./Components/Pages/Register/Register";


 export function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/instituicao/:inst" element={<Instituição/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
