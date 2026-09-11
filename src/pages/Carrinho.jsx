import produtos from "../data/produtos";
import { useState, useEffect } from "react";
import ItemCarrinho from "../components/ItemCarrinho";
import { Link } from "react-router-dom";

function Carrinho() {
  const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade;
  }, 0);

  const [lista, setLista] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarDadosData = async () => {
      try {
        setCarregando(true);

        const dadosRecebidos = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(produtos);
          }, 800);
        });

        setLista(dadosRecebidos);
      } catch (erro) {
        console.log("Erro ao buscar os produtos: ", erro);
      } finally {
        setCarregando(false);
      }
    };
    buscarDadosData();
  }, []);

  if (carregando) {
    return <p className="loading">Carregando produtos do servidor...</p>;
  }
  return (
    <section className="fundo">
      <h1>SEU CARRINHO</h1>
      <div className="produto">
        {lista.map((produto) => {
          const precoTotal = produto.preco * produto.quantidade;

          return (
            <ItemCarrinho
              key={produto.id}
              imagem={produto.imagem}
              nome={produto.nome}
              precoTotal={precoTotal}
              precoUnitario={produto.preco}
              quantidade={produto.quantidade}
            />
          );
        })}
      </div>
      <span className="total">
        <strong>Total:R$ {total.toFixed(2)}</strong>
      </span>
        <Link className="btnRotas" to={"/Pagamento"}>CONTINUAR ({lista.length})</Link>
    </section>
  );
}

export default Carrinho;
