import "../assets/styles/style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cabecalho from "../components/Cabecalho";
import ResumoCompra from "../components/ResumoCompra";
import produtos from "../data/produtos";

function Sucesso() {
  const [sucesso, setSucesso] = useState(true);
  const total = produtos.reduce(
    (acumulador, produto) => acumulador + produto.preco * produto.quantidade,
    0,
  );

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setSucesso(false);
    }, 1000);

    return () => clearTimeout(temporizador);
  }, []);

  if (sucesso) {
    return (
      <p className="loading">Carregando as verificações de segurança...</p>
    );
  }

  return (
    <section className="fundo">
      <article className="textSusFal">
        <div className="IMGEstado">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAhFBMVEX///8OqwIOqwEApQAAqAAAowD+//0AoAAAngDX7db1+vXw+PCz3bGNy4vr+OoArADm9uS84L3M6cl1wHOo2aZXtFS64Lff9N51xXcirB49sD09sjrr9eqTzZOX0pVrwGhUuVAvqy6d0ZuDxYFItkd7wnq+6blit19tvmxgu15cu1eg2aBh0OiCAAAH50lEQVR4nO1c63aiPBeG7BAqKEE8FW1FavsNtvd/f18ShQLhkECw7w+eNV1lZhQf9yH7kB0sa8aMGTNmzJgxY8aMAiT/7fl+eFgwHA6B73uk+t9/BxJGy/PrJcYvL67Lfl5ciC+v52UU/Dk3Eq2+TzEGjCl6wGZ/bPYvcNytIu8PKN1/SLjMHBdsQUeC4OhCtgz5S5+qY/5Z0ebkYEQbiBUEGUXsnDZR/pZn4W2bAv6VkviDpCsqKGJIt29P5Ba8nxxBgounQ3g5e+qc3gP+xicI0DunGPeTquoYp2fuIWRifmT/6dAua2vhR53P/eQeHCTAFo9Oa2u8YvQwJMGk3MgWcOP6oaBb9oPhY0LNBl+Ovk7LoM7XZOKL4OEMyvqsXVEuvmgCZkwjW0dh+ejXsLOdYGUhKxin1Qcohatxcm8Z2AP1WbniKzhkho3Pu4FKWFABuw++GZVesAMz1B4E8c6g9Mg3DFvl2ul9G5Oel4BNR1lb7YpnVomRsMa+49Ww5O7Su5pgx9Y5ozaXs0Ns3TOg3bXwVgP6rFyxrADW48kFqVqOqQ+cjs6YyY4n6FOQY/S+xyajkxidALsvbMeRW8RG4lc1D7Vz07PjxSh2F2xcq7R0Q7wbQ24/MttsRLlicvbDyb0d6b0qNKhZfLrhUtQ4Dg+4P2ZSugqcg1dKKdBAx2C+HrimySF8PLBb/yuUS5E7bNEjlsiGTUYI5qQH/rX9HeT/RmE1iJ0VpoaDBMKnwz22+pdceoim4SB2H9g0ufSQ3zu4FD0i/DGEnH8yyIyB4nTxqMZYAAvSwvaO/gB2S8dsZoI/C8lxiuFnvrC4ywHsbrhTFHpg5OJD9f7MrB8yvemTWxgNEwhfwkqyya7/d6/eWR6qH225TxjTLHMIKSZEaR6FmF9oZlJeotlA7ERdcuwvUVx8gH4FFMbIFDtE8WdVcoR3jH5XKxTrLXmEZSdFC3G0ZvExrKsuiktRCOllKmw9Ssx5LN5JoTRycdnncKIlO8uKjXksVB2CPCRXQaxHLnRNWR3c3upqXbu0enfk6hmeKGJNRAg4Smpdu3bdojVL25WZ9aSp2bSXW6gI66VRGxNOwSS3k9UKTV9io0PO35moJii+yJKLqbzXYds3nTwlOBoQnQ3//PrWEy/yGmyGahU/i7rL6wPZcJEixLrtvlpld4SH6zO/gqyqLUZu6ba9A+vsYkQNplsRTK9HI7hIprRs71Jq7bEwr+9EDKinMYXlHbuuhpFWpF12yg7Hiy3QTnKQNKi14/WOTva+hA7LsmOmhrPbZXc4eatvNy1x2/34LUGPXYfkUuFf7V0M7hBefRFevqB2U0C6smtnF98NmJzrsfyX3E1Wa0+TUk92Tptm8bFYmc7QrCd49epq3ZaXEvkd2nbX8h0fahXw3pvSLAQ3z6qx2/b2srTYrVvKxZLkOL7kBQxBIqVMChu7jk4K1bIalxohAmRVfx0jVxccU2tvno20VuOWSBbX70Eyp/o6ts6RWuD/ESt3T+zTimQtWQB8V5yRj1/xPbRSJ/O1XjaTj5fGrKQqOqSVBYQt/Sd4redE3qYwUSa5TIqtH2rN3ZNOYeHfmrJPTo8tZVXxkA37/EcNUd/wJ9a7S1WqYnun1SXLmjN3Vhhn9a6C/3XflG9Qq/XeE45z4EyHXHvVg2Dj15yS3ER/GX9J3ZB3xW0s3aqntWK0kVPtyRBue8w14Kt+D/LOx7mU8lXNirGj2kaONE/iXQBkya0A9bvr/Zaa1bYVtxgMNzAnk+gl0j46l5zq1inS7FRwt2hLQVjcWdXpvTVJTokZh6ZTkEfu3px9cveU+4FVT1k5ChEi/8Xydr3mZxh3ffUG26uSu4KyWlk1q9ldFJ3ZrhsiWJG2UbD7jIiqVnmQ1eoECHR3tW3qts+TeFfQ6IgP2u1ZON1fH8FP21s3erMEQ3YErF1Pkww5YoGXtOtlmuSG7KZY+86aUESNxinEjW6XY9Duu9/bh0Jwlt7lbXT3w/FpyC4eS816VHuXnkROc4wbhuyAEitMqVTU1O6McK2WetXr6LIXD9s9JvdghLosxrark2B+plJDVK74zvuwcSOVqQWESzadcbXqKZYOnFqw+i3PfszRPSSX6A+I0BGjULx93KsdKiplYpEEK9UQlSsqb2eoY6+y5UNFiyZIoPMYTTPGTBqJKa2+j+STamvL/zdkOBRfxpBjZTft37mw7XifFIFfWbNUs9VeB1FpH901hBVLiIrUx04HislK1LtMDDlKw/U6emg2SFka2vPhw3b8GiYZ9LGGwvT0co+uKx7CTEz08ubgFIOpyB1rdA9cB5406iQHhibJ8wrIqGYNTeFzELPHK8yeYMhPf5hhyNIYavT0B++CmRo8Eq0EsydnmPQyMGN3fCnJjB9YJdeePVs1wTG1TnBiy+Ihd7Tp8XV9dHBtQeR27WIqXFHmD5OcFBQINiPDBnK+hs3vKoF8iBOqwyhShJ0pT6hawnfxb5qp7qnsB+NkQsE9HhTAT0brJ5qsODrup35sAN+G8s4p6CmXCy79edZzF/iJfHX5lU7kPwPk92kGCnb39KcZCIgnQZQkVCixIrfiSRBPR7hNHLc4bkbLTO9rL3adZDmpn3bDi1a7ow25lsVSiMQTSMD+oyeQ5LgvDySIlqvXSwzui8vxH3p6Sw7+5JtAfvLNjBkzZsyYMWPGjBll/B/oEG8dbDLYgwAAAABJRU5ErkJggg=="
            alt="IMAGEM DE SUCCESSO"
          />
        </div>
        <Cabecalho
          titulo="Parabéns!!! Sua compra foi aprovada!!!!"
          subtitulo="Você passou por todas as verificações de segurança"
        />
        <ResumoCompra
          total={total}
          quantidade={produtos.length}
          produtos={produtos}
        />
        <p>Clique no botão abaixo para voltar ao carrinho</p>

        <Link className="btnRotas" to="/">
          Ir para o carrinho
        </Link>
      </article>
    </section>
  );
}

export default Sucesso;
