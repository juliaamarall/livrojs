const frm = document.querySelector('form');
const resp = document.querySelector('h2')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
     const numero = Number(frm.num.value);

     const raiz = Math.sqrt(numero)

     if(Number.isInteger(raiz)){
        resp.innerHTML = `O número informado é inteiro e sua RAIZ é: ${raiz}`
     } else{
        resp.innerHTML = `O número informado não existe RAIZ EXATA: ${raiz}`
     }


})