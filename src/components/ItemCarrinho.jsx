function ItemCarrinho({ imagem, nome, preco, quantidade }) {
  return (
    <div className="cardCarrinho">
      <img src={imagem} alt={nome} />
      <span>Nome: {nome}</span>
      <span>Preço: R$ {preco.toFixed(2)}</span>
      <span>Quantidade: {quantidade}</span>
    </div>
  );
}

export default ItemCarrinho;