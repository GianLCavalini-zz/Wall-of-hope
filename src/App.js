import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Editar } from "./Components/Pages/Editar/Editar";
import { Home } from "./Components/Pages/Home/Home";
import { Register } from "./Components/Pages/Register/Register";
import { Favoritos } from "./Components/Pages/Favoritos/Favoritos";


 export function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/editar-cadastro/:id" element={<Editar/>}/>
    <Route path="/favoritos" element={<Favoritos/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
