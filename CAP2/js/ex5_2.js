const frm = document.querySelector("form");
const nomePromo = document.querySelector("h3"); // Corrigido para querySelector
const valorPromo = document.querySelector("h4"); // Corrigido para querySelector

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // Previne o envio do formulário

    const nomeMedi = frm.med.value; // Obtém o valor do campo "med"
    const preco = Number(frm.preco.value); // Obtém e converte o valor do campo "preco"
    const precoNovo = Math.floor(preco * 2).toFixed(2)
    // Exibe a promoção no h3
    nomePromo.innerText = `Promoção de ${nomeMedi}`;
    valorPromo.innerText = `Leve 2 por apenas R$: ${precoNovo}`
})