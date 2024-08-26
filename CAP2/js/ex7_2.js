const frm = document.querySelector("form");
const promo1 = document.querySelector("h3");
const promo2 = document.querySelector("h4");


frm.addEventListener("submit", (e) =>{
    const nomeProduto = frm.produto.value;
    const precoProduto = Number(frm.preco.value);

    const valorPromocao = (precoProduto * 0.50).toFixed(2);

    const valorLeve3 = ((precoProduto * 3) - valorPromocao).toFixed(2);

    promo1.innerText = `${nomeProduto} - Promoção: LEVE 3 POR R$: ${valorLeve3}`;
    promo2.innerText = `O 3° produto custa apenas R$: ${valorPromocao}`

    e.preventDefault()
})
