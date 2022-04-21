import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editar } from "./Components/Pages/Editar/Editar";
import { Home } from "./Components/Pages/Home/Home";
import { Instituição } from "./Components/Pages/Instituição/instituição";
import { Register } from "./Components/Pages/Register/Register";


 export function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/instituicao/:id" element={<Instituição/>}/>
    <Route path="/editar-cadastro/:id" element={<Editar/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
