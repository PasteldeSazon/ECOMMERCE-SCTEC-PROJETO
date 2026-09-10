function ResumoCompra({ total, quantidade, produtos }) {
  return (
    <div className="resumoCompra">
      <strong>Total: R$ {total.toFixed(2)}</strong>
      <br />
      <span>Itens: {quantidade}</span>
      <br />
      <span>Produtos:</span>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            -{produto.nome} [{produto.quantidade} unidade(s)]
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default ResumoCompra;
