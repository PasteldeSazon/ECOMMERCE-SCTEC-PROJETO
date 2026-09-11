# Feirão Simulator

Aplicação React de checkout para uma loja virtual fictícia. O projeto simula
um carrinho fixo, o preenchimento de dados de pagamento e o resultado de uma
compra, sem back-end ou integração com serviços financeiros reais.

## Objetivo

O sistema resolve o fluxo básico de finalização de uma compra:

1. Exibe os produtos e o total do carrinho.
2. Permite preencher os dados fictícios do cartão.
3. Valida o formato dos campos do pagamento.
4. Simula o processamento da compra por um segundo.
5. Aprova a compra ou encaminha para a tela de falha.

## Regra da simulação

Cartões com 16 dígitos iguais, como `1111111111111111`, são encaminhados
para a tela de falha com a mensagem `tentativa de golpe`.

Qualquer outro número com 16 dígitos e formato válido é encaminhado para a
tela de sucesso. Os dados são fictícios e não são armazenados.

## Tecnologias e técnicas

- JavaScript e JSX.
- React com componentes funcionais.
- Vite para desenvolvimento e build.
- React Router para as rotas da aplicação.
- React Hook Form para controlar o formulário.
- `useState` para estados de carregamento e processamento.
- `useEffect` para simulações de carregamento nas telas.
- Custom hook `usePagamento` para separar a regra do pagamento.
- Props, listas com `map`, `key` estável e módulos ES.
- CSS com media queries para tablets e celulares.
- HTML semântico, labels associados aos campos e feedback acessível.

## Rotas

| Rota | Função |
| --- | --- |
| `/` | Carrinho com produtos, subtotais e total |
| `/Pagamento` | Formulário de pagamento |
| `/Falha` | Resultado de pagamento recusado |
| `/Sucesso` | Confirmação de compra aprovada |

## Estrutura principal

```text
src/
|- App.jsx                  # Rotas da aplicação
|- main.jsx                 # Ponto de entrada
|- pages/
|  |- Carrinho.jsx          # Produtos e total
|  |- Pagamento.jsx         # Formulário e validação
|  |- Falha.jsx             # Resultado recusado
|  `- Sucesso.jsx           # Resultado aprovado
|- components/
|  |- ItemCarrinho.jsx      # Produto recebido por props
|  |- ResumoCompra.jsx      # Resumo recebido por props
|  `- Cabecalho.jsx         # Cabeçalho reutilizável
|- hooks/
|  `- usePagamento.jsx      # Processamento e navegação
|- data/
|  `- produtos.js           # Array fixo de produtos
`- assets/styles/
   `- style.css             # Estilos e responsividade
```

## Como executar

Requisitos: Node.js e npm instalados.

```bash
npm install
npm run dev
```

Depois, abra o endereço exibido pelo Vite no navegador.

Para verificar o projeto:

```bash
npm run lint
npm run build
```

## Como testar o fluxo

1. Abra o carrinho e clique em `CONTINUAR`.
2. Preencha o titular, a validade no formato `MM/AA` e o CVV com três dígitos.
3. Use `1111111111111111` para testar a falha.
4. Use `1234567890123456` para testar o sucesso.
5. Observe a mensagem `Processando compra...` e o botão desabilitado durante
   o processamento.

## Investigação com o debugger

O debugger do VS Code foi utilizado para acompanhar o envio do formulário e a
regra de decisão do pagamento. Os pontos investigados foram:

- `src/pages/Pagamento.jsx`, dentro do `onSubmit`, para conferir os dados
  recebidos pelo React Hook Form.
- `src/hooks/usePagamento.jsx`, antes e depois da `Promise`, para verificar o
  estado de processamento e a espera de um segundo.
- `src/hooks/usePagamento.jsx`, na expressão que testa os 16 dígitos iguais,
  para comparar os resultados `true` e `false`.

Foram usados os seguintes casos de teste:

- `1111111111111111`: `cartaoComDigitosIguais` resulta em `true` e a rota de
  falha é selecionada.
- `1234567890123456`: `cartaoComDigitosIguais` resulta em `false` e a rota de
  sucesso é selecionada.

Os breakpoints podem ser criados clicando na margem esquerda do VS Code ou
temporariamente com a instrução `debugger;`. Depois da investigação, os pontos
temporários foram removidos ou deixados comentados para evitar pausas durante
o uso normal.

## Melhorias futuras

- Adicionar Zod com `@hookform/resolvers` para centralizar o esquema de
  validação.
- Substituir as imagens externas por arquivos locais do projeto.
- Usar rotas em minúsculas para padronizar `/pagamento`, `/sucesso` e `/falha`.
- Persistir o carrinho em uma API ou banco de dados em uma versão com back-end.
- Adicionar testes automatizados para validação e navegação.

## Escopo

Este projeto é uma simulação educacional de checkout. Não existe pagamento
real, back-end, catálogo editável, autenticação ou armazenamento de dados
financeiros.