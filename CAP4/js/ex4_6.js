const frm = document.querySelector('form');
const r01 = document.querySelector('#resp1');
const r02 = document.querySelector('#resp2');
const r03 = document.querySelector('#resp3');

frm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const saque = Number(frm.saque.value);

    if(saque % 10 != 0){
        alert("Valor Inválido para notas disponíveis (R$ 10, 50, 100)");
        frm.saque.focus();  // Corrigido aqui
        return;
    }

    const notasCem = Math.floor(saque / 100);
    let resto = saque % 100;
    const notasCinquenta = Math.floor(resto / 50);
    resto = resto % 50;
    const notasDez = Math.floor(resto / 10);

    if(notasCem > 0){
        r01.innerText = `Notas de R$ 100: ${notasCem}`;
    }

    if(notasCinquenta > 0 ){
        r02.innerText = `Notas de R$ 50: ${notasCinquenta}`;
    }

    if(notasDez > 0 ){
        r03.innerText = `Notas de R$ 10: ${notasDez}`;
    }
});
