let totalAPagarDoProduto = 0;
const iniciacaoDeUmaFrase = "Por gentileza, informe:";

for (let i = 1; i <= 5; i++) {
  const codigoDoProduto = prompt(`${iniciacaoDeUmaFrase} digite o código do produto ${i}:`);
  const quantidadeDoProduto = parseInt(prompt(`${iniciacaoDeUmaFrase} digite a quantidade do produto ${i}:`));
  const valorUnitarioDoProduto = parseFloat(prompt(`${iniciacaoDeUmaFrase} digite o valor unitário do produto ${i}:`));

  const valorDaCompraDoProduto = quantidadeDoProduto * valorUnitarioDoProduto;
  totalAPagarDoProduto += valorDaCompraDoProduto;

  document.write(`
  <table>
    <tr>
      <th>Produto</th>
      <th>Código</th>
      <th>Quantidade</th>
      <th>Valor Unitário</th>
      <th>Total a Pagar</th>
    </tr>
    <tr>
      <td>${i}</td>
      <td>${codigoDoProduto}</td>
      <td>${quantidadeDoProduto}</td>
      <td>${valorUnitarioDoProduto}</td>
      <td>${valorDaCompraDoProduto.toFixed(2)}</td>
    </tr>
  </table>
  <br />
`);
}

document.write(`
  <p>
    O valor total a pagar pelos produtos é: R$ ${totalAPagarDoProduto.toFixed(2)}
  </p>
`)