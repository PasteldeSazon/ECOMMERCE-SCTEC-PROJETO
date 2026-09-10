function ItemCarrinho({ imagem, nome, precoTotal, precoUnitario, quantidade }) {
  return (
    <div className="cardCarrinho">
      <img src={imagem} alt={nome} />
      <span><b>Nome:</b>  {nome}</span>
      <span><b>Preço total:</b> R$ {precoTotal.toFixed(2)}</span>
      <span><b>Preço unitário:</b> R$ {precoUnitario.toFixed(2)}</span>
      <span><b>Quantidade:</b> {quantidade}</span>
    </div>
  );
}

export default ItemCarrinho;