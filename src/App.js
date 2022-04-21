import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Pages/Home/Home";
import { Register } from "./Components/Pages/Register/Register";


 export function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/register" element={<Register/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
