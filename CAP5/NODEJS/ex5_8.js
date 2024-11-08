const prompt = require("prompt-sync")()
console.log("PROGRAMA ANOS DE COPA DO MUNDO. DIGITE 0 PARA SAIR")

do{
    const ano = Number(prompt("Ano: "))
    if( ano == 0){
        break
    }else if ( ano == 1942 || ano == 1946){
        console.log("NÃO HOUVE COPA DO MUNDO ( 2° GUERRA MUNDIAL )")
    } else if ( ano >= 1930 && ano % 4 == 2){
        console.log(`SIM! ${ano} é ano de COPA DO MUNDOOOOOO`)
    }else{
        console.log(`NÃO! ${ano} NÃO é ano de COPA DO MUNDOOOOOO`)
    }
} while(true)