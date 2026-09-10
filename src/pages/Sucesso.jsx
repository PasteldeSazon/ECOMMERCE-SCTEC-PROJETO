import "../assets/styles/style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import ResumoCompra from "../components/ResumoCompra";
import produtos from "../data/produtos";

function Sucesso() {
  const [sucesso, setSucesso] = useState(true);
  const total = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.quantidade,
    0,
  );

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setSucesso(false);
    }, 1000);

    return () => clearTimeout(temporizador);
  }, []);
    
  if (sucesso) {
    return <p className="loading">Carregando as verificações de segurança...</p>;
  }

  return (
    <>
      <Cabecalho
        titulo="Parabéns!!! Sua compra foi aprovada!!!!"
        subtitulo="Você passou por todas as verificações de segurança"
      />
      <ResumoCompra
        total={total}
        quantidade={produtos.length}
        produtos={produtos}
      />
      <p>Clique no botão abaixo para voltar ao carrinho</p>

      <Link to="/">Ir para o carrinho</Link>
    </>
  );
}

export default Sucesso