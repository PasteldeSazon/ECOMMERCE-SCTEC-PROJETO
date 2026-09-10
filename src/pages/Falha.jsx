import "../assets/styles/style.css";
import { Link } from "react-router-dom";

function Falha(){
    return(
        <>
        <h1>ERRO 244: AVISO DE GOLPE</h1>
        <p>Esta mensagem está aparecendo pois os 16 dígitos do cartão são iguais!!!</p>
        <p>Ou você é um golpista, ou não preencheu o formulário da forma corrta</p>
        <p>Por favor, clique aqui para poder voltar ao formulário e corrigir o campo do número do seu cartão</p>
        <Link to={"/Pagamento"}>Voltar</Link>
        </>
    )
}

export default Falha