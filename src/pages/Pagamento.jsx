import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../assets/styles/style.css";
function Pagamento() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h1>Formulário para compra</h1>
      <form
        onSubmit={handleSubmit((data) => {
          const cartaoComDigitosIguais = /^(\d)\1{15}$/.test(data.NumCartao);

          navigate(cartaoComDigitosIguais ? "/Falha" : "/Sucesso");
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
              // 1. Remove espaços e hifens antes de validar e salvar no estado
              setValueAs: (value) => value.replace(/[\s-]/g, ""),
              pattern: {
                // 2. Agora o pattern só precisa checar se restaram exatamente 16 números
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

        <button type="submit" className="btnPedido">
          Finalizar pedido
        </button>
      </form>
    </>
  );
}

export default Pagamento;
