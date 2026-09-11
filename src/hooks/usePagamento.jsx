import { useNavigate } from "react-router-dom";

function usePagamento() {
	const navigate = useNavigate();

	const finalizarPagamento = (numeroCartao) => {
		const cartaoComDigitosIguais = /^(\d)\1{15}$/.test(numeroCartao);

		navigate(cartaoComDigitosIguais ? "/Falha" : "/Sucesso");
	};

	return { finalizarPagamento };
}

export default usePagamento;
