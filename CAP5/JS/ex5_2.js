const frm = document.querySelector('form');
const resp = document.querySelector('h3');

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.numero.value)
    let resposta = `Entre ${numero} e 1:`

    for(let i = numero; i > 2; i--){
        resposta = resposta + i + ", "
    }

    resp.innerText = resposta + "1."
})