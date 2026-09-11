import { useForm } from "react-hook-form";
import usePagamento from "../hooks/usePagamento";
import produtos from "../data/produtos";
import "../assets/styles/style.css";
function Pagamento() {
  const { finalizarPagamento, processando } = usePagamento();
  const total = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.quantidade,
    0,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="fundo">
      <h1>Formulário para compra</h1>
      <p className="total">Total da compra: R$ {total.toFixed(2)}</p>
      <form
        onSubmit={handleSubmit((data) => {
          // debugger;
          finalizarPagamento(data.NumCartao);
        })}
      >
        <div className="collumInputs">
          <label className="labelNegrito" htmlFor="titular">
            Nome do titular:
          </label>
          <br />
          <input
            className={errors.titular ? "inputErro" : ""}
            id="titular"
            type="text"
            placeholder="Nome do titular"
            {...register("titular", {
              required: "Nome do titular é obrigatório",
              minLength: {
                value: 4,
                message: "O nome do titular deve conter no minimo 4 caracteres",
              },
              maxLength: {
                value: 120,
                message:
                  "O nome do titular deve conter menos de 120 caracteres",
              },
            })}
          />
          <br />
          {errors.titular && (
            <span className="erro">{errors.titular.message}</span>
          )}
          <br />
          <label className="labelNegrito" htmlFor="NCartao">
            Número do cartão:
          </label>
          <br />
          <input
            className={errors.NumCartao ? "inputErro" : ""}
            id="NCartao"
            inputMode="numeric"
            type="text"
            placeholder="Número do seu cartão"
            {...register("NumCartao", {
              required: "Número do cartão é obrigatório",
              setValueAs: (value) => value.replace(/[\s-]/g, ""),
              pattern: {
                value: /^[0-9]{16}$/,
                message:
                  "O número do cartão deve conter exatamente 16 números.",
              },
            })}
          />
          <br />
          {errors.NumCartao && (
            <span className="erro">{errors.NumCartao.message}</span>
          )}
          <br />
        </div>
        <div className="rowInputs">
          <div className="campo">
            <label className="labelNegrito" htmlFor="validade">
              MM/AA:
            </label>

            <input
              className={errors.DataCartao ? "inputErro" : ""}
              id="validade"
              inputMode="numeric"
              type="text"
              maxLength={5}
              placeholder="MM/AA"
              {...register("DataCartao", {
                required: "A data de validade é obrigatória",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                  message: "Formato inválido. Use o padrão MM/AA (ex: 05/30)",
                },
              })}
            />

            {errors.DataCartao && (
              <span className="erro">{errors.DataCartao.message}</span>
            )}
          </div>

          <div className="campo">
            <label className="labelNegrito" htmlFor="cvv">
              CVV:
            </label>

            <input
              className={errors.CVV ? "inputErro" : ""}
              id="cvv"
              type="text"
              placeholder="CVV"
              inputMode="numeric"
              maxLength={3}
              {...register("CVV", {
                required: "CVV é obrigatório",
                pattern: {
                  value: /^[0-9]{3}$/,
                  message: "Formato inválido. O CVV tem apenas 3 números",
                },
              })}
            />

            {errors.CVV && <span className="erro">{errors.CVV.message}</span>}
          </div>
        </div>

        {processando && (
          <p className="loading" aria-live="polite">
            Processando compra...
          </p>
        )}
        <button type="submit" className="btnRotas" disabled={processando}>
          {processando ? "Aguarde..." : "Finalizar pedido"}
        </button>
      </form>
    </section>
  );
}

export default Pagamento;
