const pi = 3.141592;

const raio = parseFloat(prompt("Digite o valor do raio do círculo:"));

const area = pi * Math.pow(raio, 2);

alert(`A área do círculo é: ${area.toFixed(4)}`);