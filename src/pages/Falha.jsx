import "../assets/styles/style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";

function Falha() {
  const [falha, setFalha] = useState(true);

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setFalha(false);
    }, 1000);

    return () => clearTimeout(temporizador);
  }, []);

  if (falha) {
    return <p className="loading">Carregando as verificações de segurança...</p>;
  }

  return (
    <>
      <Cabecalho
        titulo="ERRO 244: AVISO DE GOLPE"
        subtitulo="Esta mensagem está aparecendo pois os 16 dígitos do cartão são iguais!!!"
      />
      <p>
        Ou você é um golpista, ou não preencheu o formulário corretamente.
      </p>
      <p>
        Por favor, clique aqui para poder voltar ao formulário e corrigir o
        campo do número do seu cartão
      </p>
      <Link to={"/Pagamento"}>Voltar</Link>
    </>
  );
}

export default Falha;
