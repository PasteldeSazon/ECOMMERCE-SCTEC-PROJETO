import "../assets/styles/style.css";
import { Link } from "react-router-dom";

function Sucesso() {
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