const frm = document.querySelector('form');
const resp = document.querySelector('h2');

frm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const nome = frm.nome.value
    const masculino = frm.masculino.checked

    const altura = Number(frm.altura.value)

    let peso

    if(masculino){
        peso = 22 * (altura * altura)
    } else {
        peso = 21 * (altura * altura)
    }

    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg`
})


frm.addEventListener("reset", () =>{
    resp.innerText= ""
})