const frm = document.querySelector('form');
const resp = document.querySelector('h2');

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
const bairro = frm.bairro.value;
 let taxa

 switch(bairro){
    case "messejana":
        taxa = 5.00
        break

    case "eusebio":
         taxa = 10.00
         break

    case "aquiraz":
        taxa = 25.00
        break

    default:
        taxa = 6.00
 }

 resp.innerHTML = `Sua Taxa é ${taxa}`
})