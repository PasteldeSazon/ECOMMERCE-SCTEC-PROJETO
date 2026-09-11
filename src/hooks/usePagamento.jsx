import { useNavigate } from "react-router-dom";
import { useState } from "react";

function usePagamento() {
  const navigate = useNavigate();
  const [processando, setProcessando] = useState(false);

  const finalizarPagamento = async (numeroCartao) => {
    setProcessando(true);
    // debugger;
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    // debugger;
    const cartaoComDigitosIguais = /^(\d)\1{15}$/.test(numeroCartao);
    // debugger;
    setProcessando(false);
    navigate(cartaoComDigitosIguais ? "/Falha" : "/Sucesso");
  };

  return { finalizarPagamento, processando };
}

export default usePagamento;
