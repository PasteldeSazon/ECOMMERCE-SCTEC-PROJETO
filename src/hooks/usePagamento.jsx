import { useNavigate } from "react-router-dom";
import { useState } from "react";

function usePagamento() {
	const navigate = useNavigate();
	const [processando, setProcessando] = useState(false);

	const finalizarPagamento = async (numeroCartao) => {
		setProcessando(true);

		await new Promise((resolve) => {
			setTimeout(resolve, 1000);
		});

		const cartaoComDigitosIguais = /^(\d)\1{15}$/.test(numeroCartao);

		setProcessando(false);
		navigate(cartaoComDigitosIguais ? "/Falha" : "/Sucesso");
	};

	return { finalizarPagamento, processando };
}

export default usePagamento;
