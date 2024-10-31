
        alert("DIGITE 0 PARA SAIR DO PROGRAMA");

do {
    const num = Number(prompt("Digite um Número: "));
    
    if (num == 0 || isNaN(num)) {
        const sair = confirm("CONFIRMAR SAIDA?");
        
        if (sair) {
            break;
        } else {
            continue;
        }
    }

    if (num % 2 == 0) {
        alert(`O dobro de ${num} é: ${num * 2}`);
    } else {
        alert(`O triplo de ${num} é: ${num * 3}`);
    }
    
} while (true);

alert("BYE BYE");
