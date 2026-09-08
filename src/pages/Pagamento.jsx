import { useForm } from "react-hook-form";

function Pagamento() {
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
          console.log(data);
        })}
      >
        <label htmlFor="titular">Nome do titular:</label>
        <br />
        <input
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
              message: "O nome do titular deve conter menos de 120 caracteres",
            },
          })}
        />
        <br />
        {errors.titular && <span>{errors.titular.message}</span>}
        <br />
        <label htmlFor="NCartao">Número do cartão:</label>
        <br />
        <input
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
              message: "O número do cartão deve conter exatamente 16 números.",
            },
          })}
        />

        <br />
        {errors.NumCartao && <span>{errors.NumCartao.message}</span>}
        <br />
        <label htmlFor="validade">MM/AA:</label>
        <br />
        <input
          id="validade"
          inputMode="numeric"
          type="text"
          maxLength={5} // Impede o usuário de digitar mais do que 5 caracteres (MM/AA)
          placeholder="MM/AA"
          {...register("DataCartao", {
            required: "A data de validade é obrigatória",
            pattern: {
              // Valida meses de 01 a 12 seguidos de uma barra '/' e 2 dígitos para o ano
              value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
              message: "Formato inválido. Use o padrão MM/AA (ex: 05/30)",
            },
          })}
        />
        <br />
        {errors.DataCartao && <span>{errors.DataCartao.message}</span>}
        <br />
        <label htmlFor="cvv">CVV:</label>
        <br />
        <input
          id="cvv"
          type="text"
          placeholder="CVV"
          inputMode="numeric"
          maxLength={3}
          {...register("CVV", {
            required: "CVV é obrigatório",
            pattern: {
              value: /^[0-9]{3}$/,
              message: "Formato invalido. O CVV tem apenas 3 números",
            },
          })}
        />
        <br />
        {errors.CVV && <span>{errors.CVV.message}</span>}
        <br />
        <input type="submit" />
      </form>
    </>
  );
}

export default Pagamento;
