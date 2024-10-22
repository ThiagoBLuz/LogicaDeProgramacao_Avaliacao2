const N = parseInt(prompt("Digite a quantidade de valores inteiros:"));

let dentro = 0; 
let fora = 0;   

for (let i = 0; i < N; i++) {
    const X = parseInt(prompt(`Digite o valor ${i + 1}:`));

    if (X >= 10 && X <= 20) {
        dentro++;
        console.log(`${X} in`);
    } else {
        fora++;
        console.log(`${X} out`);
    }
}
alert(`Total in: ${dentro}\nTotal out: ${fora}`);
