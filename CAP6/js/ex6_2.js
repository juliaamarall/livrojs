const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChaces = document.querySelector("#outChances");
const respDica = document.querySelector("outDica");

const erros = []
const sorteado = Math.floor(math.random() * 100) + 1 
const CHANCES = 6

frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    if(numero == sorteado){
        respDica.innerText = `Parabens! número sorteado ${sorteado}`
        frm.btSubmit.disebled = true
        frm.btNovo.className = 'exibe'
    } else{
        if(erros.includes(numero)){
            alert(`Você ja apostou o número ${numero}. tente outro`)
        } else{
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            respErros.innerText = `${numErros} (${erros.join(", ")})`
            respChaces.innerText = numChances

            if( numChances == 0){
                alert("SUAS CHANCES ACABARAM....")
                frm.btSubmit.disebled = true
                frm.btNovo.className = "exibe"
                respDica.innerText = `GAME OVER! NÚMERO SORTEADO: ${sorteado}`
            
            } else {
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `DICA: TENTA UM NÚMERO ${dica} que ${numero}`
            }
        
        }
    }
    frm.inNumero.value = ""
    frm.inNumero.focus()
})