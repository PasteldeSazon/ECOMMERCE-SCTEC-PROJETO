import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Carrinho";
import Pagamento from "./pages/Pagamento";
import Falha from "./pages/Falha";
import Sucesso from "./pages/Sucesso";
import "./assets/styles/style.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Carrinho />} />
        <Route path="/Pagamento" element={<Pagamento />} />
        <Route path="/Falha" element={<Falha />} />
        <Route path="/Sucesso" element={<Sucesso />} />

        <Route path="*" element={<h1>ERRO!!!! Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
