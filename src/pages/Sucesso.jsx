import "../assets/styles/style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Sucesso() {
      const [sucesso, setSucesso] = useState(true);
    
      useEffect(() => {
        const temporizador = setTimeout(() => {
          setSucesso(false);
        }, 1000);
    
        return () => clearTimeout(temporizador);
      }, []);
    
      if (sucesso) {
        return <p className="loading">Carregando as verificações de segurança...</p>;
      }
    return(
        <>
        <h1>Parabens!!! Sua compra foi aprovada!!!!</h1>
       <p>Você passou por todas as verificações de segurança</p> 
       <p>Clique no botão abaixo para voltar ao carrinho</p>

       <Link to={"/"}>Ir para o carrinho</Link>
        </>
    )
}

export default Sucesso