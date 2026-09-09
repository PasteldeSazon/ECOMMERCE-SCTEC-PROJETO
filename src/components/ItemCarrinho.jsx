function ItemCarrinho({ imagem, nome, precoTotal, precoUnitario, quantidade }) {
  return (
    <div className="cardCarrinho">
      <img src={imagem} alt={nome} />
      <span>Nome: {nome}</span>
      <span>Preço total: R$ {precoTotal.toFixed(2)}</span>
      <span style={{color: "#1a1a1a", fontSize: "15px"}}>Preço unitário: R$ {precoUnitario.toFixed(2)}</span>
      <span>Quantidade: {quantidade}</span>
    </div>
  );
}

export default ItemCarrinho;