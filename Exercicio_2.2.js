const a = parseFloat(prompt("Digite o valor de 'a':"));
const b = parseFloat(prompt("Digite o valor de 'b':"));
const c = parseFloat(prompt("Digite o valor de 'c':"));

if (a === 0) {
    alert("Impossível calcular: 'a' não pode ser zero.");
} else {
    const delta = Math.pow(b, 2) - (4 * a * c);

    if (delta < 0) {
        alert("Impossível calcular: delta é negativo.");
    } else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

        alert(`As raízes da equação são:\nRaiz 1: ${raiz1.toFixed(4)}\nRaiz 2: ${raiz2.toFixed(4)}`);
    }
}