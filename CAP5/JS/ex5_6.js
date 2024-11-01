const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const numero = Number(frm.numero.value);

    let numDivisores = 0
    for(i = 0; i <= numero; i++){

        if(numero % i == 0){
            numDivisores++
        } 
        

        if(numDivisores == 2){
            resp.innerText = `${numero} é PRIMO!`
        } else{
             resp.innerText = `${numero} NÃO é PRIMO!`
        }
    }
   
})


