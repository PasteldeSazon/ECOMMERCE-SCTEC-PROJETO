import produtos from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";
import { Link } from "react-router-dom";

function Carrinho() {
  const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade;
  }, 0);
  return (
    <>
      <h1>SEU CARRINHO</h1>
      <div className="produto">
        {produtos.map((produto) => {
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
      <div className="btnCompra">
        {/* <button>CONTINUAR({produtos.length})</button> */}
        <Link to={"/Pagamento"}>CONTINUAR({produtos.length})</Link>
      </div>
    </>
  );
}

export default Carrinho;
