let senha;

do {
    senha = parseInt(prompt("Digite a senha:"));

    if (senha !== 2002) {
        alert("Senha Invalida");
    }
} while (senha !== 2002);

alert("Acesso Permitido");
