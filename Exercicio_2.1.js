let codigoDoItem = parseInt(prompt("Digite o código do item (1 a 5):"));
let quantidadeDoItem = parseInt(prompt("Digite a quantidade:"));

let totalAPagarDoItem = 0;

switch (codigoDoItem) {
    case 1:
        totalAPagarDoItem = 4.00 * quantidadeDoItem;
        break;
    case 2:
        totalAPagarDoItem = 4.50 * quantidadeDoItem;
        break;
    case 3:
        totalAPagarDoItem = 5.00 * quantidadeDoItem;
        break;
    case 4:
        totalAPagarDoItem = 2.00 * quantidadeDoItem;
        break;
    case 5:
        totalAPagarDoItem = 1.50 * quantidadeDoItem;
        break;
    default:
        document.write("Código inválido.");
        break;
}

if (totalAPagarDoItem > 0) {
    document.write(`Total a pagar: R$ ${totalAPagarDoItem.toFixed(2)}`);
}