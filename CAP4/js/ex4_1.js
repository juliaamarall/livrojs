const frm = document.querySelector("form");
const res1 = document.querySelector("#resp1");
const res2 = document.querySelector("#resp2");

frm.addEventListener("submit", e =>{
    const aluno = frm.nomeAluno.value;
    const nota01 = Number(frm.nota1.value);
    const nota02 = Number(frm.nota2.value);

    const media = (nota01 + nota02) / 2;

    resp1.innerText = `Sua média é ${media.toFixed(2)}`;

    if(media >= 7){
        resp2.innerText = `Parabens ${aluno}! você foi aprovado(a)`
        resp2.style.color = "blue"
    } else{
        resp2.innerText = `Opss... ${aluno}! você foi reprovado` 
        resp2.style.color = "red"
    }

    e.preventDefault()
})